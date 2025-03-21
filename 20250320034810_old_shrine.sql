/*
  # Create contacts table for form submissions in api schema

  1. New Tables
    - `contacts` (in api schema)
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `message` (text)
      - `service` (text)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `contacts` table
    - Add policy for inserting data
*/

-- Create the api schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS api;

-- Create the contacts table in the api schema
CREATE TABLE IF NOT EXISTS api.contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  service text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE api.contacts ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow anonymous contact form submissions"
  ON api.contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view contacts"
  ON api.contacts
  FOR SELECT
  TO authenticated
  USING (true);