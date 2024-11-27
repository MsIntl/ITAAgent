/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { configureGenkit } from '@genkit-ai/core';
import { dotprompt } from '@genkit-ai/dotprompt';
import { firebase } from '@genkit-ai/firebase';
import { vertexAI } from '@genkit-ai/vertexai';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx88HIKfIHaC2rufGMHcsf8yh1EUYD-_U",
  authDomain: "ita-app-bfa96.firebaseapp.com",
  databaseURL: "https://ita-app-bfa96-default-rtdb.firebaseio.com",
  projectId: "ita-app-bfa96",
  storageBucket: "ita-app-bfa96.appspot.com",
  messagingSenderId: "616870604063",
  appId: "1:616870604063:web:0338a8bb3b9bad4080142a",
  measurementId: "G-ZXNN416R9V"
};

export const getProjectId = () => {
  return firebaseConfig.projectId;
};

export const config = configureGenkit({
  plugins: [
    firebase({
      projectId: getProjectId(),
      traceStore: { collection: 'traceStore' },
      flowStateStore: { collection: 'flowTraceStore' },
    }),
    vertexAI({
      projectId: getProjectId(),
      location: 'us-central1',
    }),
    dotprompt(),
  ],
  flowStateStore: 'firebase',
  traceStore: 'firebase',
  enableTracingAndMetrics: true,
  logLevel: 'debug',
});
