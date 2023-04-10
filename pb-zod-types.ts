/**
* This file was @generated using pocketbase-typegen
*/
import {z} from 'zod'


export enum Collections {
	Chats = "chats",
	PromptLikes = "promptLikes",
	PromptPreview = "promptPreview",
	Prompts = "prompts",
	Users = "users",
}

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

export const ChatsRecord = z.object({
	prompt: z.string(),
	description: z.string().optional(),
	createdBy: z.string().optional(),
	released: z.boolean().optional(),
	messages: z.object({}).optional(),
	maxTokens: z.number().min(0),
	temperature: z.number().max(1).min(0).optional(),
    collectionName: z.literal("chats"),
    collectionId: z.literal("x46adazleyma6d3"),
})

export const PromptLikesRecord = z.object({
	prompt: z.string().optional(),
	createdBy: z.string(),
    collectionName: z.literal("promptLikes"),
    collectionId: z.literal("ur6yby8kyhhak1o"),
})

export const PromptPreviewRecord = z.object({
	name: z.string().min(1),
	public: z.boolean().optional(),
	description: z.string().min(0).optional(),
	createdBy: z.string(),
	chat: z.string().optional(),
	authorName: z.string().optional(),
	likes: z.number().optional(),
    collectionName: z.literal("promptPreview"),
    collectionId: z.literal("mo9lr3kz25pjpmb"),
})

export const PromptsRecord = z.object({
	name: z.string().min(1),
	createdBy: z.string(),
	public: z.boolean().optional(),
	description: z.string().min(0).optional(),
	chat: z.string().optional(),
    collectionName: z.literal("prompts"),
    collectionId: z.literal("2lqvcutszequ6g2"),
})

export const UsersRecord = z.object({
	name: z.string().optional(),
	avatar: z.string().optional(),
    collectionName: z.literal("users"),
    collectionId: z.literal("_pb_users_auth_"),
})

// Response types include system fields and match responses from the PocketBase API
export const ChatsResponse = ChatsRecord.merge(BaseSystemFields)
export const PromptLikesResponse = PromptLikesRecord.merge(BaseSystemFields)
export const PromptPreviewResponse = PromptPreviewRecord.merge(BaseSystemFields)
export const PromptsResponse = PromptsRecord.merge(BaseSystemFields)
export const UsersResponse = UsersRecord.merge(AuthSystemFields)

// Types containing all Records and Responses, useful for creating typing helper functions