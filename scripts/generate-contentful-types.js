#!/usr/bin/env node

import { config } from 'dotenv';
import { exec } from 'node:child_process';
import { join } from 'node:path';

config();

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const environment = process.env.CONTENTFUL_ENVIRONMENT;
const outDir = join('src', 'lib', 'contentful', 'generated-types');

exec(
  `cf-content-types-generator -s ${spaceId} -t ${token} -e ${environment} -X -o ${outDir}`,
  (error, stdout) => {
    if (error) {
      console.error(error);
      return;
    }

    console.log(stdout);
  },
);
