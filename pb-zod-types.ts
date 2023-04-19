/**
* This file was @generated using pocketbase-typegen
*/
import {z} from 'zod'


// System fields
export const BaseSystemFields = z.object({
	id: z.string(),
	created: z.coerce.date(),
	updated: z.coerce.date(),
    expand: z.object({})
})

export const AuthSystemFields = z.object({
	email: z.string(),
	emailVisibility: z.boolean(),
	username: z.string(),
	verified: z.boolean(),
}).merge(BaseSystemFields)

// Record types for each collection

export const CascadesRecord = z.object({
  	name: z.string(),
  })

export const ConfigsRecord = z.object({
  	name: z.string(),
	lo_mhz: z.number().optional(),
	rf_mhz: z.number().optional(),
	span_mhz: z.number().optional(),
	input_level_dbm: z.number().optional(),
	cascade: z.string(),
	p1db: z.number().optional(),
	ip3: z.number().optional(),
	gain: z.number().optional(),
	nf: z.number().optional(),
	matlab: z.string().optional(),
	description: z.string().optional(),
	channelCost: z.number().min(0).optional(),
  })

export const ConfigsListRecord = z.object({
  	name: z.any().optional(),
	cascade: z.any().optional(),
	p1db: z.any().optional(),
	gain: z.any().optional(),
	nf: z.any().optional(),
	description: z.any().optional(),
	ip3: z.any().optional(),
	channelCost: z.any().optional(),
  })

export const EdgesRecord = z.object({
  	node: z.string(),
	s_param_name: z.string().optional(),
	config: z.string(),
	p1dB: z.number().optional(),
	ip3: z.number().optional(),
	nf: z.number().optional(),
	output_level_dbm: z.number().optional(),
	input_level_dbm: z.number().optional(),
	systemGain: z.number().optional(),
  })

export const NodesRecord = z.object({
  	part: z.string(),
	x: z.number().optional(),
	y: z.number().optional(),
	cascade: z.string(),
	mirrored: z.boolean().optional(),
	rotation: z.number().max(360).min(0).optional(),
  })

export enum PartsTagsOptions {
	"linear" = "linear",
	"positive gain" = "positive gain",
}
export const PartsRecord = z.object({
  	name: z.string(),
	s_params: z.string().array().optional(),
	p1dB: z.number().optional(),
	ip3: z.number().optional(),
	tags: z.enum(["linear", "positive gain"]).optional(),
	nf: z.number().optional(),
	price: z.number().min(0).optional(),
	datasheet: z.string().optional(),
	gain: z.number().optional(),
	type: z.string(),
  })

export const TypesRecord = z.object({
  	name: z.string(),
	symbol: z.string(),
  })

export const UsersRecord = z.object({
  	name: z.string().optional(),
	avatar: z.string().optional(),
  })

// Response types include system fields and match responses from the PocketBase API
export const CascadesResponse = CascadesRecord.merge(BaseSystemFields).extend({
    collectionName: z.literal("cascades"),
    collectionId: z.literal("yr6ojgwc2gfic98"),
  })
export const ConfigsResponse = ConfigsRecord.merge(BaseSystemFields).extend({
    collectionName: z.literal("configs"),
    collectionId: z.literal("bt426vcafqr59cp"),
  })
export const ConfigsListResponse = ConfigsListRecord.merge(z.object({id: z.string()})).extend({
    collectionName: z.literal("configsList"),
    collectionId: z.literal("uuhfp8w3cyxehd6"),
  })
export const EdgesResponse = EdgesRecord.merge(BaseSystemFields).extend({
    collectionName: z.literal("edges"),
    collectionId: z.literal("yo4geni5ylk33ae"),
  })
export const NodesResponse = NodesRecord.merge(BaseSystemFields).extend({
    collectionName: z.literal("nodes"),
    collectionId: z.literal("wajiw86rg1vzuck"),
  })
export const PartsResponse = PartsRecord.merge(BaseSystemFields).extend({
    collectionName: z.literal("parts"),
    collectionId: z.literal("yvczv21zgho5rns"),
  })
export const TypesResponse = TypesRecord.merge(BaseSystemFields).extend({
    collectionName: z.literal("types"),
    collectionId: z.literal("tuq81c8ldyz7nqx"),
  })
export const UsersResponse = UsersRecord.merge(AuthSystemFields).extend({
    collectionName: z.literal("users"),
    collectionId: z.literal("_pb_users_auth_"),
  })

// Types containing all Records and Responses, useful for creating typing helper functions