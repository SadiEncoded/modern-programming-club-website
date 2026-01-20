# Team Management System - Database-First Architecture

## Overview

The DICPC team page is built with a **full-stack, database-first approach** that separates data from presentation. This ensures scalability, maintainability, and follows industry best practices.

## Architecture

```
Database (Supabase/PostgreSQL)
    ↓
Data Layer (src/lib/data/team.ts)
    ↓
Server Components (src/app/team/page.tsx)
    ↓
UI Components (src/components/sections/team/*)
```

## Database Schema

### Tables

#### `team_members`
Stores core information about each team member.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| name | VARCHAR(255) | Full name |
| role | VARCHAR(255) | Position (e.g., "President") |
| department | VARCHAR(50) | Leadership/Technical/Operations/Design |
| bio | TEXT | Short biography |
| image_url | TEXT | Profile photo URL |
| semester | VARCHAR(20) | Current semester |
| phone | VARCHAR(20) | Contact number |
| email | VARCHAR(255) | Email address |
| github_url | TEXT | GitHub profile (optional) |
| linkedin_url | TEXT | LinkedIn profile (optional) |
| website_url | TEXT | Personal website (optional) |
| is_active | BOOLEAN | Whether member is currently active |
| display_order | INTEGER | Sort order on team page |
| created_at | TIMESTAMP | Record creation time |
| updated_at | TIMESTAMP | Last update time |

#### `skills`
Master list of all available skills.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| name | VARCHAR(100) | Skill name (unique) |
| created_at | TIMESTAMP | Record creation time |

#### `team_member_skills`
Many-to-many relationship between team members and skills.

| Column | Type | Description |
|--------|------|-------------|
| team_member_id | UUID | Foreign key to team_members |
| skill_id | UUID | Foreign key to skills |

### Indexes

- `idx_team_members_active` - Fast filtering by active status
- `idx_team_members_department` - Fast filtering by department
- `idx_team_members_display_order` - Optimized sorting

### Row Level Security (RLS)

**Public Access:**
- ✅ Anyone can view active team members
- ✅ Anyone can view skills
- ✅ Anyone can view team member-skill relationships

**Admin Access:**
- ✅ Admins can create/update/delete team members
- ✅ Admins can manage skills
- ✅ Admins can assign skills to members

## Data Flow

### 1. Database Setup

```sql
-- Run schema
psql -d your_database < database/schema/team_members.sql

-- Seed initial data
psql -d your_database < database/seeds/team_members_seed.sql
```

### 2. Data Fetching (Server-Side)

```typescript
// src/lib/data/team.ts
export async function getTeamMembers(): Promise<TeamMemberWithSkills[]> {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from("team_members")
    .select(`
      *,
      team_member_skills (
        skill:skills (name)
      )
    `)
    .eq("is_active", true)
    .order("display_order");
    
  return transformData(data);
}
```

### 3. Server Component

```typescript
// src/app/team/page.tsx
export default async function TeamPage() {
  const teamMembers = await getTeamMembers();
  const stats = await getTeamStats();
  
  return (
    <Container>
      <TeamHero stats={stats} />
      <TeamGrid members={teamMembers} />
    </Container>
  );
}
```

### 4. UI Components

Components receive data as props and handle presentation only:

```typescript
// src/components/sections/team/team-grid.tsx
export const TeamGrid = ({ members }: { members: TeamMemberWithSkills[] }) => {
  return (
    <div className="grid">
      {members.map(member => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};
```

## Type Safety

All database types are automatically generated and type-safe:

```typescript
// src/types/team.ts
export type TeamMember = Database["public"]["Tables"]["team_members"]["Row"];
export type TeamMemberWithSkills = TeamMember & {
  skills: string[];
};
```

## Benefits of This Architecture

### ✅ Separation of Concerns
- **Database**: Data storage and relationships
- **Data Layer**: Business logic and data transformation
- **Components**: Pure presentation logic

### ✅ Scalability
- Easy to add new team members via database
- No code changes needed for content updates
- Admin panel can be built to manage data

### ✅ Performance
- Server-side data fetching (Next.js App Router)
- Optimized database queries with indexes
- Efficient joins for related data

### ✅ Maintainability
- Single source of truth (database)
- Type-safe throughout the stack
- Clear data flow and dependencies

### ✅ Security
- Row Level Security policies
- Role-based access control
- SQL injection protection via Supabase client

## Future Enhancements

### Admin Dashboard
```typescript
// Future: src/app/admin/team/page.tsx
- Add new team members
- Edit existing members
- Manage skills
- Upload profile photos
- Reorder display
```

### Advanced Features
- Team member search and filtering
- Department-specific pages
- Alumni section (is_active = false)
- Activity timeline
- Member achievements

## Migration from Mock Data

Currently, the system includes fallback mock data for development. To migrate to database:

1. Set up Supabase project
2. Run schema migrations
3. Seed initial data
4. Configure environment variables
5. Remove mock data fallbacks

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
```

## Summary

This database-first architecture ensures the DICPC team page is:
- **Professional**: Industry-standard full-stack patterns
- **Scalable**: Ready for growth and new features
- **Maintainable**: Clean separation of concerns
- **Secure**: Proper access control and data protection
- **Type-Safe**: End-to-end TypeScript types

The system is production-ready and follows Next.js 14+ best practices with server components, server-side data fetching, and optimal performance.
