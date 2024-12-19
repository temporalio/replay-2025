#!/usr/bin/env node

import 'dotenv/config';

import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import contentfulManagement from 'contentful-management';
import { rimraf } from 'rimraf';

import { success, info } from './log.js';
import { ContentfulGenerator } from './client.js';
import { formatFile } from './format-file.js';

const accessToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const environmentId = process.env.CONTENTFUL_ENVIRONMENT_ID || 'master';
const organizationId = process.env.CONTENTFUL_ORGANIZATION_ID;
const destination = join('src', 'lib', 'contentful');

if (!accessToken) {
  throw new Error('CONTENTFUL_MANAGEMENT_TOKEN is required');
}

if (!spaceId) {
  throw new Error('CONTENTFUL_SPACE_ID is required');
}

if (!organizationId) {
  throw new Error('CONTENTFUL_ORGANIZATION_ID is required');
}

await rimraf(destination);
await mkdir(destination, { recursive: true });

info('🌎 Fetching content types…');

const client = contentfulManagement.createClient(
  {
    accessToken,
  },
  { defaults: { spaceId, environmentId, organizationId } },
);

const space = await client.getSpace(spaceId);
const environment = await space.getEnvironment(environmentId);
const contentTypes = await environment.getContentTypes();

const contentfulGenerator = new ContentfulGenerator(space, environment, contentTypes, destination);

await writeFile(
  join(destination, 'content-types.json'),
  JSON.stringify(contentTypes.items, null, 2),
);

await contentfulGenerator.generate();

info('Formatting files…');

formatFile(contentfulGenerator.path);

for (const file of contentfulGenerator.files) {
  formatFile(file);
}

success('🚀 Contentful client generated successfully!');
