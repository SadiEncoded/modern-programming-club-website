-- Team Members Table
CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  department VARCHAR(50) NOT NULL CHECK (department IN ('Leadership', 'Technical', 'Operations', 'Design')),
  bio TEXT,
  image_url TEXT,
  semester VARCHAR(20),
  phone VARCHAR(20),
  email VARCHAR(255) NOT NULL,
  github_url TEXT,
  linkedin_url TEXT,
  website_url TEXT,
  is_active BOOLEAN DEFAULT true,
  committee VARCHAR(50) DEFAULT '2025',
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Team Member Skills (Many-to-Many)
CREATE TABLE skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE team_member_skills (
  team_member_id UUID REFERENCES team_members(id) ON DELETE CASCADE,
  skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
  PRIMARY KEY (team_member_id, skill_id)
);

-- Indexes for performance
CREATE INDEX idx_team_members_active ON team_members(is_active);
CREATE INDEX idx_team_members_department ON team_members(department);
CREATE INDEX idx_team_members_display_order ON team_members(display_order);

-- RLS Policies (for Supabase)
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_member_skills ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Team members are viewable by everyone"
  ON team_members FOR SELECT
  USING (is_active = true);

CREATE POLICY "Skills are viewable by everyone"
  ON skills FOR SELECT
  USING (true);

CREATE POLICY "Team member skills are viewable by everyone"
  ON team_member_skills FOR SELECT
  USING (true);

-- Admin write access (authenticated users with admin role)
CREATE POLICY "Admins can manage team members"
  ON team_members FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can manage skills"
  ON skills FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can manage team member skills"
  ON team_member_skills FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin');
