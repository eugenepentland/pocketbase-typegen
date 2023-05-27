/**
* This file was @generated using pocketbase-zod-typegen
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

export const FreqPlansRecord = z.object({
  	name: z.string().optional(),
	span_mhz: z.number().optional(),
	if_cf_mhz: z.number().optional(),
  })

export const PartsRecord = z.object({
  	name: z.string().optional(),
	part_number: z.string().optional(),
  })

export const RfBandsRecord = z.object({
  	name: z.string().optional(),
	freq_plan: z.string().optional(),
	rf_center_freq_mhz: z.number().optional(),
	lo_1_freq_mhz: z.number().optional(),
	lo_2_freq_mhz: z.number().optional(),
	spectrum_flip: z.boolean().optional(),
  })

export const SystemsRecord = z.object({
  	serial_number: z.number().optional(),
	part: z.string().optional(),
	customer: z.string().optional(),
  })

export const TestDataRecord = z.object({
  	gain_db: z.number().optional(),
	rf_freq_mhz: z.number().optional(),
	if_freq_mhz: z.number().optional(),
	test_instance: z.string().optional(),
	rf_band: z.string().optional(),
  })

export const TestInstancesRecord = z.object({
  	test: z.string().optional(),
	system: z.string().optional(),
	channel: z.number().optional(),
  })

export const TestsRecord = z.object({
  	part: z.string().optional(),
	input_level_dbm: z.number().optional(),
	attenuation_db: z.number().optional(),
	rf_filter_enabled: z.boolean().optional(),
	description: z.string().optional(),
	freq_plan: z.string().optional(),
	gain: z.boolean().optional(),
	spurious: z.boolean().optional(),
	p1db: z.boolean().optional(),
  })

export const UsersRecord = z.object({
  	name: z.string().optional(),
	avatar: z.string().optional(),
  })

// Response types include system fields and match responses from the PocketBase API
export const FreqPlansResponse = FreqPlansRecord.merge(BaseSystemFields).extend({
    collectionName: z.literal("freq_plans"),
    collectionId: z.literal("4iokujhnd2sg9u8"),
  })
export const PartsResponse = PartsRecord.merge(BaseSystemFields).extend({
    collectionName: z.literal("parts"),
    collectionId: z.literal("0u2giwo7ny5iwlc"),
  })
export const RfBandsResponse = RfBandsRecord.merge(BaseSystemFields).extend({
    collectionName: z.literal("rf_bands"),
    collectionId: z.literal("zviznvjo4hly6ln"),
  })
export const SystemsResponse = SystemsRecord.merge(BaseSystemFields).extend({
    collectionName: z.literal("systems"),
    collectionId: z.literal("56tecmy9gh9brmd"),
  })
export const TestDataResponse = TestDataRecord.merge(BaseSystemFields).extend({
    collectionName: z.literal("test_data"),
    collectionId: z.literal("fycpgoi5hhaiqtb"),
  })
export const TestInstancesResponse = TestInstancesRecord.merge(BaseSystemFields).extend({
    collectionName: z.literal("test_instances"),
    collectionId: z.literal("42wc6800oqrui2l"),
  })
export const TestsResponse = TestsRecord.merge(BaseSystemFields).extend({
    collectionName: z.literal("tests"),
    collectionId: z.literal("ljs7mcjwde4twhh"),
  })
export const UsersResponse = UsersRecord.merge(AuthSystemFields).extend({
    collectionName: z.literal("users"),
    collectionId: z.literal("_pb_users_auth_"),
  })

// Types containing all Records and Responses, useful for creating typing helper functions