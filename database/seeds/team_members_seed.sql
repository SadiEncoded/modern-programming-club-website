-- Seed data for DICPC Executive Committee 2025
-- Insert skills first
INSERT INTO skills (name) VALUES
  ('Leadership'), ('Strategy'), ('Community Building'),
  ('Management'), ('Planning'), ('Coordination'),
  ('Full-Stack Dev'), ('Problem Solving'), ('Mentorship'),
  ('Organization'), ('Documentation'), ('Communication'),
  ('Administration'), ('Finance'), ('Budgeting'), ('Accountability'),
  ('Financial Planning'), ('Record Keeping'), ('Analysis'),
  ('Event Planning'), ('Logistics'), ('Team Management'),
  ('Contest Management'), ('Scheduling'),
  ('Social Media'), ('Content Creation'), ('Branding'),
  ('Digital Marketing'), ('Design'),
  ('System Design'), ('Backend'), ('DevOps'),
  ('CP Training'), ('Curriculum Design')
ON CONFLICT (name) DO NOTHING;

-- Insert team members
INSERT INTO team_members (name, role, department, bio, semester, email, display_order, image_url) VALUES
  ('Rupom Sarker', 'President', 'Leadership', 'Leading DICPC with vision and dedication to foster a thriving programming community.', '3rd Semester', 'madhurjhosarker@gmail.com', 1, '/team/President.svg'),
  ('Sheik Muhammad Shourov', 'Vice President', 'Leadership', 'Supporting club operations and driving strategic initiatives for member growth.', '3rd Semester', 'shourovpower2002@gmail.com', 2, '/team/Vice-president(shourov).svg'),
  ('Mahmudul Hasan Sadi', 'Vice President', 'Leadership', 'Passionate about competitive programming and building innovative tech solutions.', '1st Semester', 'sadi.hasanmain@gmail.com', 3, '/team/Vice-president(Sadi).svg'),
  ('Rabeya Akter Ratna', 'General Secretary', 'Operations', 'Managing club operations and ensuring smooth execution of all activities.', '3rd Semester', 'rabeyasu56@gmail.com', 4, '/team/General Secretary Ratna.svg'),
  ('Dipon Chakraborty', 'Joint Secretary', 'Operations', 'Supporting administrative tasks and coordinating member activities.', '1st Semester', 'prantikchakraborty05@gmail.com', 5, '/team/General Secretary Prantik.svg'),
  ('Rashedul Islam', 'Treasurer', 'Operations', 'Managing club finances and ensuring transparent resource allocation.', '3rd Semester', 'ahmedrabbihjcjv@gmail.com', 6, '/team/Treaurer Rashed.svg'),
  ('Mahin Binta Matin', 'Treasurer', 'Operations', 'Overseeing financial planning and maintaining club budget records.', '1st Semester', 'mahin.binta21@gmail.com', 7, '/team/Treasurer Mahin.svg'),
  ('Saima Akter Mim', 'Event Coordinator', 'Operations', 'Organizing engaging programming events and workshops for the community.', '3rd Semester', 'sm6292561@gmail.com', 8, '/team/Event Coordinator Mim.svg'),
  ('Prottasha Chakraborty', 'Event Coordinator', 'Operations', 'Coordinating contests and hackathons to enhance member skills.', '1st Semester', 'prottashacb@gmail.com', 9, '/team/Event Coordinator Prottasha.svg'),
  ('Sadia Akter', 'Media & Communication Head', 'Design', 'Managing club communications and social media presence.', '3rd Semester', 'mimsadi098765@gmail.com', 10, '/team/Media Head Sadia.svg'),
  ('Sabrina Sultana', 'Media & Communication Head', 'Design', 'Creating engaging content and managing digital outreach strategies.', '1st Semester', 'sabrinasultana1152@gmail.com', 11, '/team/Media Head Sabrina.svg'),
  ('Hasan Dhrubo', 'Tech Lead', 'Technical', 'Leading technical projects and mentoring members in software development.', '1st Semester', 'hasandhrubo603@gmail.com', 12, '/team/Tech Lead.svg'),
  ('Hasanul Banna', 'Training & Development Lead', 'Technical', 'Designing training programs and conducting workshops for skill development.', '3rd Semester', 'bannahasanul608@gmail.com', 13, '/team/Training Head.svg');

-- Link team members with their skills
-- Note: This is a simplified version. In production, you'd want to map each member to their specific skills
-- For now, we'll assign relevant skills based on their roles

-- Leadership skills for President and VPs
INSERT INTO team_member_skills (team_member_id, skill_id)
SELECT tm.id, s.id
FROM team_members tm
CROSS JOIN skills s
WHERE tm.role IN ('President', 'Vice President')
  AND s.name IN ('Leadership', 'Strategy', 'Community Building', 'Management');

-- Operations skills
INSERT INTO team_member_skills (team_member_id, skill_id)
SELECT tm.id, s.id
FROM team_members tm
CROSS JOIN skills s
WHERE tm.department = 'Operations'
  AND s.name IN ('Organization', 'Coordination', 'Planning', 'Communication');

-- Technical skills
INSERT INTO team_member_skills (team_member_id, skill_id)
SELECT tm.id, s.id
FROM team_members tm
CROSS JOIN skills s
WHERE tm.department = 'Technical'
  AND s.name IN ('System Design', 'Backend', 'CP Training', 'Mentorship');

-- Design/Media skills
INSERT INTO team_member_skills (team_member_id, skill_id)
SELECT tm.id, s.id
FROM team_members tm
CROSS JOIN skills s
WHERE tm.department = 'Design'
  AND s.name IN ('Social Media', 'Content Creation', 'Branding', 'Design');
