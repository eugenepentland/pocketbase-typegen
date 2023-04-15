/**
* This file was @generated using pocketbase-typegen
*/
import {z} from 'zod'


// System fields
export const BaseSystemFields = z.object({
	id: z.string(),
	created: z.coerce.date(),
	updated: z.coerce.date(),
})

export const AuthSystemFields = z.object({
	email: z.string(),
	emailVisibility: z.boolean(),
	username: z.string(),
	verified: z.boolean(),
}).merge(BaseSystemFields)

// Record types for each collection

export const ChatsRecord = z.object({	prompt: z.string(),
	createdBy: z.string().optional(),
	messages: z.any().optional(),
	name: z.string().optional(),
  })

export const PromptLikesRecord = z.object({	prompt: z.string().optional(),
	createdBy: z.string(),
  })

export const PromptPreviewRecord = z.object({	name: z.string().min(1),
	public: z.boolean().optional(),
	description: z.string().min(0).optional(),
	createdBy: z.string(),
	chat: z.string().optional(),
	createdByName: z.string().optional(),
	likes: z.number().optional(),
  })

export enum PromptsModelOptions {
	"gpt-3.5-turbo" = "gpt-3.5-turbo",
	"gpt-4" = "gpt-4",
}
export const PromptsRecord = z.object({	name: z.string().min(1),
	createdBy: z.string(),
	public: z.boolean().optional(),
	description: z.string().min(0).optional(),
	chat: z.string().optional(),
	max_tokens: z.number().optional(),
	temperature: z.number().max(2).min(0).optional(),
	model: z.enum(["gpt-3.5-turbo", "gpt-4"]),
	messages: z.any().optional(),
  })

export const UsersRecord = z.object({	name: z.string().optional(),
	avatar: z.string().optional(),
  })

// Response types include system fields and match responses from the PocketBase API
export const ChatsResponse = ChatsRecord.merge(BaseSystemFields).extend({
    collectionName: z.literal("chats"),
    collectionId: z.literal("x46adazleyma6d3"),
  })
export const PromptLikesResponse = PromptLikesRecord.merge(BaseSystemFields).extend({
    collectionName: z.literal("promptLikes"),
    collectionId: z.literal("ur6yby8kyhhak1o"),
  })
export const PromptPreviewResponse = PromptPreviewRecord.merge(z.object({id: z.string()})).extend({
    collectionName: z.literal("promptPreview"),
    collectionId: z.literal("mo9lr3kz25pjpmb"),
  })
export const PromptsResponse = PromptsRecord.merge(BaseSystemFields).extend({
    collectionName: z.literal("prompts"),
    collectionId: z.literal("2lqvcutszequ6g2"),
  })
export const UsersResponse = UsersRecord.merge(AuthSystemFields).extend({
    collectionName: z.literal("users"),
    collectionId: z.literal("_pb_users_auth_"),
  })

// Types containing all Records and Responses, useful for creating typing helper functions