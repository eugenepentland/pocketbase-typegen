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

export const ChatsRecord = z.object({
  	name: z.string().optional(),
	summary: z.string().optional(),
  })

export const MessagesRecord = z.object({
  	message: z.string(),
	audio: z.string().optional(),
	chat: z.string(),
	user: z.boolean().optional(),
  })

export const UsersRecord = z.object({
  	name: z.string().optional(),
	avatar: z.string().optional(),
  })

// Response types include system fields and match responses from the PocketBase API
export const ChatsResponse = ChatsRecord.merge(BaseSystemFields)
  
export const ChatsCollection = {
  responseSchema: ChatsResponse,
  recordSchema: ChatsRecord,
  collectionName: "chats",
  collectionId: "y635wcny4ku7mc5",
}
export const MessagesResponse = MessagesRecord.merge(BaseSystemFields)
  
export const MessagesCollection = {
  responseSchema: MessagesResponse,
  recordSchema: MessagesRecord,
  collectionName: "messages",
  collectionId: "a8way2f8kk00p4e",
}
export const UsersResponse = UsersRecord.merge(AuthSystemFields)
  
export const UsersCollection = {
  responseSchema: UsersResponse,
  recordSchema: UsersRecord,
  collectionName: "users",
  collectionId: "_pb_users_auth_",
}

// Types containing all Records and Responses, useful for creating typing helper functions