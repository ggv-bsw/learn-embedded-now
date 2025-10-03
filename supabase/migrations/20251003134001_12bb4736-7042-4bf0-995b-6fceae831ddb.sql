-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  category text NOT NULL,
  read_time text NOT NULL,
  featured boolean NOT NULL DEFAULT false,
  published boolean NOT NULL DEFAULT true
);

-- Enable RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Everyone can read published blog posts
CREATE POLICY "Anyone can view published blog posts"
ON public.blog_posts
FOR SELECT
USING (published = true);

-- Create index for slug lookups
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);

-- Create index for category filtering
CREATE INDEX idx_blog_posts_category ON public.blog_posts(category);

-- Create index for featured posts
CREATE INDEX idx_blog_posts_featured ON public.blog_posts(featured, published);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_blog_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_blog_posts_updated_at();

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, author, category, read_time, featured) VALUES
(
  'The Force of Embedded Systems: A New Hope for IoT',
  'force-of-embedded-systems-iot',
  'Discover how embedded systems are bringing balance to the IoT galaxy, connecting devices across the universe with unprecedented power.',
  '<h2>Introduction to IoT and Embedded Systems</h2><p>In a galaxy not so far away, embedded systems are revolutionizing how we connect devices across the universe. From smart homes to industrial automation, the Force of IoT is strong with embedded technology.</p><h2>The Power of Connected Devices</h2><p>IoT devices communicate through various protocols, each serving a unique purpose in the grand scheme of device connectivity. Whether it''s MQTT for lightweight messaging or HTTP for web-based communication, understanding these protocols is essential for any Jedi engineer.</p><h2>Building Your First IoT System</h2><p>Starting with Arduino or ESP32, you can create your own IoT devices that sense, compute, and communicate. The journey from padawan to master begins with understanding the basics of sensors, microcontrollers, and wireless communication.</p>',
  'Master Yoda',
  'IoT',
  '5 min read',
  true
),
(
  'The Arduino Strikes Back: Advanced Programming Techniques',
  'arduino-strikes-back-advanced-programming',
  'Unleash the power of the dark side with advanced Arduino programming techniques that would make even Darth Vader proud.',
  '<h2>Beyond Basic Arduino</h2><p>Once you''ve mastered the basics of digitalWrite and analogRead, it''s time to explore the darker, more powerful aspects of Arduino programming. Interrupts, timers, and direct register manipulation await those brave enough to venture deeper.</p><h2>Interrupt-Driven Programming</h2><p>Learn how to respond to events instantly without constantly checking conditions. Interrupts are the lightsabers of the programming world – elegant weapons for a more civilized age of embedded development.</p><h2>Optimizing Your Code</h2><p>Memory management and code optimization techniques that will make your Arduino projects run faster and more efficiently than ever before.</p>',
  'Anakin Skywalker',
  'Arduino',
  '8 min read',
  false
),
(
  'Return of the C: Mastering Low-Level Programming',
  'return-of-c-mastering-low-level',
  'Join Luke Skywalker''s journey from padawan to Jedi Master as he conquers the ancient art of embedded C programming.',
  '<h2>The Ancient Language of Embedded Systems</h2><p>C programming is the foundation of embedded systems development. Unlike high-level languages, C gives you direct control over hardware, making it essential for resource-constrained devices.</p><h2>Pointers and Memory Management</h2><p>Understanding pointers is like understanding the Force itself – mysterious at first, but incredibly powerful once mastered. Learn how to manipulate memory directly and create efficient data structures.</p><h2>Bit Manipulation Mastery</h2><p>Master the art of bit operations to control individual hardware registers and optimize your code for maximum performance.</p>',
  'Luke Skywalker',
  'Embedded C',
  '12 min read',
  false
),
(
  'The Phantom Menace: Debugging Embedded Systems',
  'phantom-menace-debugging-embedded',
  'Learn to sense disturbances in the code and eliminate bugs before they strike. Your debugging skills will become legendary.',
  '<h2>The Art of Debugging</h2><p>Debugging embedded systems requires a unique set of skills. Without the luxury of console.log or traditional debuggers, you must rely on your wits, logic analyzers, and oscilloscopes.</p><h2>Common Pitfalls</h2><p>Timing issues, race conditions, and hardware-software mismatches are the phantom menaces lurking in every embedded project. Learn to identify and eliminate these threats.</p><h2>Professional Debugging Tools</h2><p>Discover the tools that professional engineers use to track down even the most elusive bugs in their embedded systems.</p>',
  'Obi-Wan Kenobi',
  'Debugging',
  '6 min read',
  false
),
(
  'Attack of the Clones: Scalable IoT Architecture',
  'attack-of-clones-scalable-iot',
  'Build an army of connected devices with scalable IoT architectures that can handle galactic-scale deployments.',
  '<h2>Scaling IoT Systems</h2><p>As your IoT deployment grows from a few devices to thousands, you need architectures that can scale. Learn about cloud platforms, message brokers, and distributed systems.</p><h2>Device Management</h2><p>Managing thousands of devices requires sophisticated tools and strategies. Discover how to update firmware remotely, monitor device health, and handle failures gracefully.</p><h2>Security at Scale</h2><p>With great power comes great responsibility. Learn how to secure your IoT fleet against attacks and ensure data privacy across your entire network.</p>',
  'Padmé Amidala',
  'Architecture',
  '10 min read',
  false
),
(
  'Revenge of the Sith: Security in Embedded Systems',
  'revenge-of-sith-security-embedded',
  'Protect your systems from the dark side with advanced security techniques. Don''t let your code fall to the Sith.',
  '<h2>The Dark Side of Security</h2><p>Security vulnerabilities in embedded systems can have catastrophic consequences. Learn how attackers think and how to defend against common attack vectors.</p><h2>Encryption and Authentication</h2><p>Implement strong encryption and authentication mechanisms to protect your devices and data from unauthorized access.</p><h2>Secure Boot and Updates</h2><p>Ensure your devices boot securely and can receive updates safely without opening doors to malicious actors.</p>',
  'Mace Windu',
  'Security',
  '7 min read',
  false
);