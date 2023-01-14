'use strict';

/**
 * bot-log controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitizeObject, sanitizeArray } = require('../../../../utils/sanitize');

module.exports = createCoreController('api::bot-log.bot-log', () => ({
  async create(ctx) {
    ctx.request.body = {
      data: {
        ...ctx.request.body
      }
    }
    const response = await super.create(ctx);
    return sanitizeObject(response.data);
  },
}));