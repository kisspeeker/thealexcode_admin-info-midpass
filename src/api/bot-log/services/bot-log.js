'use strict';

/**
 * bot-log service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bot-log.bot-log');
