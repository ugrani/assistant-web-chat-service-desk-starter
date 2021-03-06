/**
 * (C) Copyright IBM Corp. 2020.
 *
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 */

export enum setup {
  ORGANIZATION_ID = '<your-organization-id>', // https://help.mypurecloud.com/faq/how-do-i-find-my-organization-id/
  DEPLOYMENT_ID = '<your-deployment-id>', // https://help.mypurecloud.com/articles/create-a-widget-for-web-chat/ ID of widget == DEPLOYMENT_ID
  QUEUE_TARGET = '<your-queue-name>', // name of queue you want chat requests to go into
  AUTH_SERVER_BASE_URL = '<your-auth-server-host-url>', // the URL of the server that will make an authenticated request for JWT. See https://developer.mypurecloud.com/api/webchat/authenticated-chat.html
}
