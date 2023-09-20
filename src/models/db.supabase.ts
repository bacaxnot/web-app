export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          audio_url: string
          content: string
          created_at: string
          edited_at: string
          id: string
          image_url: string
          slug: string
          title: string
          user_id: string
        }
        Insert: {
          audio_url: string
          content?: string
          created_at?: string
          edited_at?: string
          id?: string
          image_url: string
          slug: string
          title?: string
          user_id: string
        }
        Update: {
          audio_url?: string
          content?: string
          created_at?: string
          edited_at?: string
          id?: string
          image_url?: string
          slug?: string
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      roles: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar_url: string
          created_at: string
          id: string
          name: string
          role_id: string
          username: string
        }
        Insert: {
          avatar_url: string
          created_at?: string
          id: string
          name: string
          role_id?: string
          username: string
        }
        Update: {
          avatar_url?: string
          created_at?: string
          id?: string
          name?: string
          role_id?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_role_id_fkey"
            columns: ["role_id"]
            referencedRelation: "roles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
