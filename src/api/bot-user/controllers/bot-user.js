'use strict';

/**
 * bot-user controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitizeObject, sanitizeArray } = require('../../../../utils/sanitize');

module.exports = createCoreController('api::bot-user.bot-user', () => ({
  async find(ctx) {
    const response = await super.find(ctx);
    return {
      values: sanitizeArray(response.data),
      meta: response.meta
    }
  },

  async create(ctx) {
    ctx.request.body = {
      data: {
        ...ctx.request.body
      }
    }
    const response = await super.create(ctx);
    return sanitizeObject(response.data);
  },

  async update(ctx) {
    ctx.request.body = {
      data: {
        ...ctx.request.body
      }
    }
    const response = await super.update(ctx);
    return response;
  },
}));
