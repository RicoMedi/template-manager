-- Users table
create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text unique,
  name text,
  created_at timestamp with time zone default timezone('utc', now())
);

-- Projects table
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  name text,
  description text,
  status text check (status in ('active', 'inactive')),
  start_date date,
  end_date date,
  created_at timestamp with time zone default timezone('utc', now()),
  updated_at timestamp with time zone default timezone('utc', now())
);

-- Templates table
create table if not exists templates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  name text,
  description text,
  created_at timestamp with time zone default timezone('utc', now()),
  updated_at timestamp with time zone default timezone('utc', now())
);

-- Template Fields table
create table if not exists template_fields (
  id uuid primary key default gen_random_uuid(),
  template_id uuid references templates(id) on delete cascade,
  type text check (type in ('text', 'checkbox', 'date')),
  label text,
  options jsonb,
  "order" integer,
  required boolean default false,
  created_at timestamp with time zone default timezone('utc', now())
);

-- Notifications table
create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  project_id uuid references projects(id) on delete set null,
  message text,
  read boolean default false,
  created_at timestamp with time zone default timezone('utc', now())
);

-- Indexes for foreign keys
create index if not exists idx_notifications_project_id on notifications (project_id);
create index if not exists idx_notifications_user_id on notifications (user_id);
create index if not exists idx_projects_user_id on projects (user_id);
create index if not exists idx_templates_user_id on templates (user_id);
create index if not exists idx_template_fields_template_id on template_fields (template_id);
