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
	created: z.date(),
	updated: z.date(),
	collectionId: z.string(),
	collectionName: z.string(),
	expand: z.object({}).optional()
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
})

export const PromptLikesRecord = z.object({
	prompt: z.string().optional(),
	createdBy: z.string(),
})

export const PromptPreviewRecord = z.object({
	name: z.string().min(1),
	public: z.boolean().optional(),
	description: z.string().min(0).optional(),
	createdBy: z.string(),
	chat: z.string().optional(),
	authorName: z.string().optional(),
	likes: z.number().optional(),
})

export const PromptsRecord = z.object({
	name: z.string().min(1),
	createdBy: z.string(),
	public: z.boolean().optional(),
	description: z.string().min(0).optional(),
	chat: z.string().optional(),
})

export const UsersRecord = z.object({
	name: z.string().optional(),
	avatar: z.string().optional(),
})

// Response types include system fields and match responses from the PocketBase API
export const ChatsResponse = ChatsRecord.merge(BaseSystemFields)
export const PromptLikesResponse = PromptLikesRecord.merge(BaseSystemFields)
export const PromptPreviewResponse = PromptPreviewRecord.merge(BaseSystemFields)
export const PromptsResponse = PromptsRecord.merge(BaseSystemFields)
export const UsersResponse = UsersRecord.merge(AuthSystemFields)

// Types containing all Records and Responses, useful for creating typing helper functions