export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author: string
          category: string
          category_ro: string | null
          category_ru: string | null
          content: string
          content_ro: string | null
          content_ru: string | null
          created_at: string
          excerpt: string
          excerpt_ro: string | null
          excerpt_ru: string | null
          featured: boolean
          id: string
          image_url: string | null
          published: boolean
          read_time: string
          slug: string
          title: string
          title_ro: string | null
          title_ru: string | null
          updated_at: string
        }
        Insert: {
          author: string
          category: string
          category_ro?: string | null
          category_ru?: string | null
          content: string
          content_ro?: string | null
          content_ru?: string | null
          created_at?: string
          excerpt: string
          excerpt_ro?: string | null
          excerpt_ru?: string | null
          featured?: boolean
          id?: string
          image_url?: string | null
          published?: boolean
          read_time: string
          slug: string
          title: string
          title_ro?: string | null
          title_ru?: string | null
          updated_at?: string
        }
        Update: {
          author?: string
          category?: string
          category_ro?: string | null
          category_ru?: string | null
          content?: string
          content_ro?: string | null
          content_ru?: string | null
          created_at?: string
          excerpt?: string
          excerpt_ro?: string | null
          excerpt_ru?: string | null
          featured?: boolean
          id?: string
          image_url?: string | null
          published?: boolean
          read_time?: string
          slug?: string
          title?: string
          title_ro?: string | null
          title_ru?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      contact_inquiries: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          status: string
          subject: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          status?: string
          subject: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          status?: string
          subject?: string
        }
        Relationships: []
      }
      course_inquiries: {
        Row: {
          course_id: string
          created_at: string
          email: string | null
          id: string
          message: string | null
          name: string
          phone: string | null
          surname: string
        }
        Insert: {
          course_id: string
          created_at?: string
          email?: string | null
          id?: string
          message?: string | null
          name: string
          phone?: string | null
          surname: string
        }
        Update: {
          course_id?: string
          created_at?: string
          email?: string | null
          id?: string
          message?: string | null
          name?: string
          phone?: string | null
          surname?: string
        }
        Relationships: []
      }
      development_boards: {
        Row: {
          applications: string[] | null
          applications_ro: string[] | null
          applications_ru: string[] | null
          created_at: string
          description: string
          description_ro: string | null
          description_ru: string | null
          features: string[]
          features_ro: string[] | null
          features_ru: string[] | null
          full_description: string | null
          full_description_ro: string | null
          full_description_ru: string | null
          id: string
          image: string
          in_stock: boolean
          name: string
          name_ro: string | null
          name_ru: string | null
          original_price: number | null
          package_includes: string[] | null
          package_includes_ro: string[] | null
          package_includes_ru: string[] | null
          price: number
          rating: number
          reviews: number
          specifications: string[]
          specifications_ro: string[] | null
          specifications_ru: string[] | null
          updated_at: string
        }
        Insert: {
          applications?: string[] | null
          applications_ro?: string[] | null
          applications_ru?: string[] | null
          created_at?: string
          description: string
          description_ro?: string | null
          description_ru?: string | null
          features: string[]
          features_ro?: string[] | null
          features_ru?: string[] | null
          full_description?: string | null
          full_description_ro?: string | null
          full_description_ru?: string | null
          id: string
          image: string
          in_stock?: boolean
          name: string
          name_ro?: string | null
          name_ru?: string | null
          original_price?: number | null
          package_includes?: string[] | null
          package_includes_ro?: string[] | null
          package_includes_ru?: string[] | null
          price: number
          rating?: number
          reviews?: number
          specifications: string[]
          specifications_ro?: string[] | null
          specifications_ru?: string[] | null
          updated_at?: string
        }
        Update: {
          applications?: string[] | null
          applications_ro?: string[] | null
          applications_ru?: string[] | null
          created_at?: string
          description?: string
          description_ro?: string | null
          description_ru?: string | null
          features?: string[]
          features_ro?: string[] | null
          features_ru?: string[] | null
          full_description?: string | null
          full_description_ro?: string | null
          full_description_ru?: string | null
          id?: string
          image?: string
          in_stock?: boolean
          name?: string
          name_ro?: string | null
          name_ru?: string | null
          original_price?: number | null
          package_includes?: string[] | null
          package_includes_ro?: string[] | null
          package_includes_ru?: string[] | null
          price?: number
          rating?: number
          reviews?: number
          specifications?: string[]
          specifications_ro?: string[] | null
          specifications_ru?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      one_to_one_requests: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string | null
          name: string
          phone: string | null
          preferred_date: string | null
          status: string
          trainer_name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name: string
          phone?: string | null
          preferred_date?: string | null
          status?: string
          trainer_name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          phone?: string | null
          preferred_date?: string | null
          status?: string
          trainer_name?: string
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string
          id: string
          order_id: string
          product_id: string
          product_image: string | null
          product_name: string
          quantity: number
          total_price: number
          unit_price: number
        }
        Insert: {
          created_at?: string
          id?: string
          order_id: string
          product_id: string
          product_image?: string | null
          product_name: string
          quantity: number
          total_price: number
          unit_price: number
        }
        Update: {
          created_at?: string
          id?: string
          order_id?: string
          product_id?: string
          product_image?: string | null
          product_name?: string
          quantity?: number
          total_price?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string
          customer_email: string
          customer_name: string
          customer_phone: string | null
          id: string
          status: string
          total_price: number
        }
        Insert: {
          created_at?: string
          customer_email: string
          customer_name: string
          customer_phone?: string | null
          id?: string
          status?: string
          total_price: number
        }
        Update: {
          created_at?: string
          customer_email?: string
          customer_name?: string
          customer_phone?: string | null
          id?: string
          status?: string
          total_price?: number
        }
        Relationships: []
      }
      team_members: {
        Row: {
          bio: string
          bio_ro: string | null
          bio_ru: string | null
          created_at: string
          experience: string
          expertise: string[]
          expertise_ro: string[] | null
          expertise_ru: string[] | null
          id: number
          image: string
          linkedin: string | null
          location: string
          location_ro: string | null
          location_ru: string | null
          name: string
          rating: number
          role: string
          role_ro: string | null
          role_ru: string | null
          specialization: string
          specialization_ro: string | null
          specialization_ru: string | null
          specialties: string[]
          specialties_ro: string[] | null
          specialties_ru: string[] | null
          students: number
          title: string
          title_ro: string | null
          title_ru: string | null
          updated_at: string
        }
        Insert: {
          bio: string
          bio_ro?: string | null
          bio_ru?: string | null
          created_at?: string
          experience: string
          expertise?: string[]
          expertise_ro?: string[] | null
          expertise_ru?: string[] | null
          id: number
          image: string
          linkedin?: string | null
          location: string
          location_ro?: string | null
          location_ru?: string | null
          name: string
          rating?: number
          role: string
          role_ro?: string | null
          role_ru?: string | null
          specialization: string
          specialization_ro?: string | null
          specialization_ru?: string | null
          specialties?: string[]
          specialties_ro?: string[] | null
          specialties_ru?: string[] | null
          students?: number
          title: string
          title_ro?: string | null
          title_ru?: string | null
          updated_at?: string
        }
        Update: {
          bio?: string
          bio_ro?: string | null
          bio_ru?: string | null
          created_at?: string
          experience?: string
          expertise?: string[]
          expertise_ro?: string[] | null
          expertise_ru?: string[] | null
          id?: number
          image?: string
          linkedin?: string | null
          location?: string
          location_ro?: string | null
          location_ru?: string | null
          name?: string
          rating?: number
          role?: string
          role_ro?: string | null
          role_ru?: string | null
          specialization?: string
          specialization_ro?: string | null
          specialization_ru?: string | null
          specialties?: string[]
          specialties_ro?: string[] | null
          specialties_ru?: string[] | null
          students?: number
          title?: string
          title_ro?: string | null
          title_ru?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      trainer_applications: {
        Row: {
          bio: string
          created_at: string
          email: string
          experience_years: number
          expertise: string
          id: string
          linkedin_url: string | null
          name: string
          phone: string | null
          portfolio_url: string | null
          status: string
          why_teach: string
        }
        Insert: {
          bio: string
          created_at?: string
          email: string
          experience_years: number
          expertise: string
          id?: string
          linkedin_url?: string | null
          name: string
          phone?: string | null
          portfolio_url?: string | null
          status?: string
          why_teach: string
        }
        Update: {
          bio?: string
          created_at?: string
          email?: string
          experience_years?: number
          expertise?: string
          id?: string
          linkedin_url?: string | null
          name?: string
          phone?: string | null
          portfolio_url?: string | null
          status?: string
          why_teach?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
