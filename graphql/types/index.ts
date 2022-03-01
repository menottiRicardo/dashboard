import { GraphQLDate } from 'graphql-iso-date'
import { decorateType } from 'nexus'

export const GQLDate = decorateType(GraphQLDate, {
  sourceType: 'Date',
  asNexusMethod: 'date',
})
export * from './Employee'