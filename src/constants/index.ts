/**
 * Types
 */
import type { MenuItem } from "@/types";

/**
 * Assets
 */
import {
  Component,
  Blocks,
  Terminal,
  History,
  Code,
  LaptopMinimal,
  ArrowBigDownDash,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  Database,
  FileJson,
  Table,
  LayoutDashboard,
  FileSpreadsheet,
} from "lucide-react";

import { blog1, blog2, blog3, avatar1, avatar2, avatar3 } from "@/assets";

// Header
export const navMenu: MenuItem[] = [
  {
    href: "/formats",
    label: "Formats",
    submenu: [
      {
        href: "#",
        icon: Database,
        label: "Parquet Tables",
        desc: "Explore columnar format data with high compression and efficient querying",
      },
      {
        href: "#",
        icon: FileJson,
        label: "Iceberg Tables",
        desc: "Discover table format for huge analytic datasets with evolution tracking",
      },
      {
        href: "#",
        icon: Component,
        label: "Delta Tables",
        desc: "Examine Delta Lake tables with ACID transactions and schema enforcement",
      },
      {
        href: "#",
        icon: Table,
        label: "Hudi Tables",
        desc: "Explore incremental processing framework for data lake storage",
      },
    ],
  },
  {
    href: "/features",
    label: "Features",
  },
  {
    href: "/docs",
    label: "Docs",
    submenu: [
      {
        href: "#",
        icon: Terminal,
        label: "Getting Started",
        desc: "Quick guide to connect your S3 buckets and explore lakehouse formats",
      },
      {
        href: "#",
        icon: FileSpreadsheet,
        label: "Core Concepts",
        desc: "Understanding metadata, schemas, and partitioning in lakehouse formats",
      },
      {
        href: "#",
        icon: LayoutDashboard,
        label: "UI Guide",
        desc: "Detailed walkthrough of the Metastore Viewer interface and capabilities",
      },
      {
        href: "#",
        icon: Blocks,
        label: "Integrations",
        desc: "Connect with Trino and other analytics engines for direct querying",
      },
    ],
  },
  {
    href: "/pricing",
    label: "Pricing",
  },
];

// Hero
export const heroData = {
  sectionSubtitle: "S3 Lakehouse Explorer",
  sectionTitle: "Powerful metadata viewer for",
  decoTitle: "data lakes",
  sectionText:
    "Explore and analyze Parquet, Iceberg, Delta, and Hudi tables directly from S3 without traditional metastore services. Get instant access to schemas, partitions, and version history.",
};
// Feature
export const featureData = {
  sectionSubtitle: "Features",
  sectionTitle: "Metadata Exploration Toolkit",
  sectionText:
    "Discover everything about your lakehouse tables with our comprehensive metadata exploration toolkit designed for data engineers and analysts.",
  features: [
    {
      icon: Table,
      iconBoxColor: "bg-blue-600",
      title: "Table Schema Explorer",
      desc: "Visualize column names, data types, and partition keys directly from your S3 storage without requiring traditional metastore services",
      // imgSrc: feature1,
    },
    {
      icon: History,
      iconBoxColor: "bg-cyan-500",
      title: "Version Tracking",
      desc: "Examine Iceberg snapshots, Delta logs, and Hudi commits to understand table evolution over time and track schema changes",
      // imgSrc: feature2,
    },
    {
      icon: FileJson,
      iconBoxColor: "bg-yellow-500",
      title: "Format Compatibility",
      desc: "Support for all major lakehouse formats including Parquet, Iceberg, Delta, and Hudi tables with a unified interface",
    },
    {
      icon: FileSpreadsheet,
      iconBoxColor: "bg-red-500",
      title: "Partition Analysis",
      desc: "Gain insights into partition structure, optimization opportunities, and pruning statistics for improved query performance",
    },
    {
      icon: Code,
      iconBoxColor: "bg-purple-500",
      title: "Trino Integration",
      desc: "Execute SQL queries directly against discovered tables without configuring external metastore connections",
    },
  ],
};

// Process
export const processData = {
  sectionSubtitle: "How it works",
  sectionTitle: "Three Simple Steps to Metadata Discovery",
  sectionText:
    "Start exploring your lakehouse tables in minutes with our straightforward setup process.",
  list: [
    {
      icon: LaptopMinimal,
      title: "Connect your storage",
      text: "Input your S3, Azure Blob, or MinIO connection details to access your data lake storage containing table formats.",
    },
    {
      icon: ArrowBigDownDash,
      title: "Auto-discover tables",
      text: "Our system automatically scans and identifies Parquet, Iceberg, Delta, and Hudi tables from your provided storage locations.",
    },
    {
      icon: Database,
      title: "Explore metadata",
      text: "Browse schemas, examine partitions, review version history, and even run SQL queries through our intuitive interface.",
    },
  ],
};

// Overview
export const overviewData = {
  sectionSubtitle: "Overview",
  sectionTitle: "Complete Lakehouse Visibility",
  sectionText:
    "Get comprehensive insights into your data lake structures without traditional metastore services or catalog setup.",
  listTitle: "Empowering data teams with modern lakehouse capabilities",
  list: [
    {
      title: "4+",
      text: "Table Formats",
    },
    {
      title: "100%",
      text: "Metastore-Free",
    },
    {
      title: "Real-time",
      text: "Schema Updates",
    },
  ],
};

// Review
export const reviewData = {
  sectionSubtitle: "Testimonials",
  sectionTitle: "What Our Users Are Saying",
  reviewCard: [
    {
      title: "Efficient Metadata Exploration with Metastore Viewer",
      text: "Metastore Viewer has transformed how we manage metadata on S3. The intuitive UI and powerful insights have improved our data engineering workflow significantly.",
      reviewAuthor: "Ava Thompson",
      date: "2 months ago",
    },
    {
      title: "Unmatched Performance and Usability",
      text: "Exploring Delta and Iceberg metadata has never been easier. The Metastore Viewer’s snapshot and partition insights are invaluable.",
      reviewAuthor: "Liam Parker",
      date: "1 month ago",
    },
    {
      title: "A Game Changer for the Data Engineers",
      text: "The ability to explore metadata directly from object storage has streamlined our workflow immensely. Highly recommend for managing large-scale datasets.",
      reviewAuthor: "Sophia Martinez",
      date: "2 weeks ago",
    },
  ],
};

// Blog
export const blogData = {
  sectionSubtitle: "Our Blog",
  sectionTitle: "Metastore Insights",
  sectionText:
    "Stay informed with the latest trends, tips, and updates on metadata management and data engineering.",
  blogs: [
    {
      imgSrc: blog1,
      badge: "Metadata Management",
      title: "Best Practices for Managing Lakehouse Metadata on S3",
      author: {
        avatarSrc: avatar1,
        authorName: "Alice Johnson",
        publishDate: "Nov 5, 2024",
        readingTime: "7 min read",
      },
    },
    {
      imgSrc: blog2,
      badge: "Data Engineering",
      title: "Efficient Schema Evolution Strategies in Iceberg & Delta",
      author: {
        avatarSrc: avatar2,
        authorName: "Ethan Wright",
        publishDate: "Aug 20, 2024",
        readingTime: "6 min read",
      },
    },
    {
      imgSrc: blog3,
      badge: "Cloud Storage",
      title: "How to Optimize Metadata Retrieval from Object Stores",
      author: {
        avatarSrc: avatar3,
        authorName: "Sophia Lee",
        publishDate: "May 12, 2024",
        readingTime: "4 min read",
      },
    },
  ],
};

// CTA
export const ctaData = {
  text: "Start exploring metadata insights with Metastore Viewer today!",
};

// Footer
export const footerData = {
  links: [
    {
      title: "Product",
      items: [
        { href: "#", label: "Features" },
        { href: "#", label: "Pricing" },
        { href: "#", label: "Documentation" },
        { href: "#", label: "API Reference" },
      ],
    },
    {
      title: "Developers",
      items: [
        { href: "#", label: "Getting Started" },
        { href: "#", label: "CLI Tool" },
        { href: "#", label: "Support" },
        { href: "#", label: "Integration Guides" },
        { href: "#", label: "Release Notes" },
      ],
    },
    {
      title: "Company",
      items: [
        { href: "#", label: "About" },
        { href: "#", label: "Careers" },
        { href: "#", label: "Blog" },
        { href: "#", label: "Contact" },
      ],
    },
    {
      title: "Legal",
      items: [
        { href: "#", label: "Terms of Service" },
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Data Protection Policy" },
        { href: "#", label: "Cookie Settings" },
      ],
    },
  ],
  copyright: "© 2025 LakeLens",
  socialLinks: [
    { href: "#", icon: Twitter },
    { href: "#", icon: Github },
    { href: "#", icon: Linkedin },
    { href: "#", icon: Instagram },
    { href: "#", icon: Youtube },
  ],
};

// Type Definitions
