import type { Schema, Attribute } from '@strapi/strapi';

export interface AlaaaPost extends Schema.Component {
  collectionName: 'components_alaaa_posts';
  info: {
    displayName: 'post';
    description: '';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'alaaa.post': AlaaaPost;
    }
  }
}
