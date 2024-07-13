export interface ITemplates {
    title: string;
    description: string;
    category: string;
    icon: string;
    slug: string;
    prompt: string;
    fromFields: (
        | {
              label: string;
              type: string;
              name: string;
              required?: boolean;
              options?: undefined;
          }
        | {
              label: string;
              type: string;
              options: string[];
              name: string;
              required?: boolean;
          }
    )[];
}

export const TEMPLATES_DATA: ITemplates[] = [
    {
        title: 'Blog Title Generator',
        description: 'An AI tool that generates blog titles based on your blog information',
        category: 'blog',
        icon: '/templateIcons/blogTitle.png',
        slug: 'generate-blog-title',
        prompt: 'Give me 5 blog topic ideas in bullet-wise format based on the given niche & outline. Provide the result with a heading at the top in Rich text editor format.',
        fromFields: [
            {
                label: 'Tell us the main topic of your blog.',
                type: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Give us an outline of your blog post. (optional)',
                type: 'textarea',
                name: 'outline',
            },
        ],
    },
    {
        title: 'SEO Keyword Suggestions',
        description: 'An AI tool that provides SEO keyword suggestions based on your content',
        category: 'SEO',
        icon: '/templateIcons/seo.png',
        slug: 'seo-keyword-suggestions',
        prompt: 'Provide a list of 10 SEO keywords based on the given content and target audience. Provide the result with a heading at the top in Rich text editor format.',
        fromFields: [
            {
                label: 'Enter your content topic',
                type: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Enter target audience (optional)',
                type: 'input',
                name: 'audience',
            },
        ],
    },
    {
        title: 'Social Media Post Ideas',
        description:
            'An AI tool that generates social media post ideas based on your campaign goals',
        category: 'social media',
        icon: '/templateIcons/socialMedia.png',
        slug: 'social-media-post-ideas',
        prompt: 'Generate 5 social media post ideas based on the given campaign goals and preferred platform. Provide the result with a heading at the top in Rich text editor format.',
        fromFields: [
            {
                label: 'Enter campaign goals',
                type: 'textarea',
                name: 'goals',
                required: true,
            },
            {
                label: 'Select preferred platform',
                type: 'select',
                options: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'],
                name: 'platform',
                required: true,
            },
        ],
    },
    {
        title: 'Email Subject Line Generator',
        description:
            'An AI tool that generates compelling email subject lines based on your email content',
        category: 'email marketing',
        icon: '/templateIcons/email.png',
        slug: 'email-subject-line-generator',
        prompt: 'Provide 5 compelling email subject lines based on the given email content and target audience. Provide the result with a heading at the top in Rich text editor format.',
        fromFields: [
            {
                label: 'Enter email content summary',
                type: 'textarea',
                name: 'contentSummary',
                required: true,
            },
            {
                label: 'Enter target audience (optional)',
                type: 'input',
                name: 'audience',
            },
        ],
    },
    {
        title: 'Product Description Generator',
        description:
            'An AI tool that generates engaging product descriptions based on your product details',
        category: 'e-commerce',
        icon: '/templateIcons/product-description.png',
        slug: 'product-description-generator',
        prompt: 'Generate 3 engaging product descriptions based on the given product details and target market. Provide the result with a heading at the top in Rich text editor format.',
        fromFields: [
            {
                label: 'Enter product name',
                type: 'input',
                name: 'productName',
                required: true,
            },
            {
                label: 'Enter product features',
                type: 'textarea',
                name: 'features',
                required: true,
            },
            {
                label: 'Enter target market (optional)',
                type: 'input',
                name: 'market',
            },
        ],
    },
    {
        title: 'Video Script Outline Generator',
        description:
            'An AI tool that generates video script outlines based on your video topic and goals',
        category: 'video content',
        icon: '/templateIcons/video.png',
        slug: 'video-script-outline-generator',
        prompt: 'Provide an outline for a video script based on the given video topic and goals. Provide the result with a heading at the top in Rich text editor format.',
        fromFields: [
            {
                label: 'Enter video topic',
                type: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Enter video goals (optional)',
                type: 'textarea',
                name: 'goals',
            },
        ],
    },
    {
        title: 'Code Bug Detector',
        description: 'An AI tool that detects bugs in your code',
        category: 'programming',
        icon: '/templateIcons/codeBug.png',
        slug: 'code-bug-detector',
        prompt: 'Detect bugs in the provided code and highlight the issues. Provide the result with a heading at the top in Rich text editor format.',
        fromFields: [
            {
                label: 'Enter your code',
                type: 'textarea',
                name: 'code',
                required: true,
            },
        ],
    },
    {
        title: 'Explain Code',
        description: 'An AI tool that explains what a given code snippet does',
        category: 'programming',
        icon: '/templateIcons/codeExplain.png',
        slug: 'explain-code',
        prompt: 'Explain the functionality of the provided code snippet in detail. Provide the result with a heading at the top in Rich text editor format.',
        fromFields: [
            {
                label: 'Enter your code snippet',
                type: 'textarea',
                name: 'codeSnippet',
                required: true,
            },
        ],
    },
    {
        title: 'Write Code',
        description: 'An AI tool that generates code based on your requirements',
        category: 'programming',
        icon: '/templateIcons/writeCode.png',
        slug: 'write-code',
        prompt: 'Generate code based on the given requirements and programming language. Provide the result with a heading at the top in Rich text editor format.',
        fromFields: [
            {
                label: 'Enter your requirements',
                type: 'textarea',
                name: 'requirements',
                required: true,
            },
            {
                label: 'Select programming language',
                type: 'select',
                options: ['JavaScript', 'Python', 'Java', 'C#', 'C++'],
                name: 'language',
                required: true,
            },
        ],
    },
    {
        title: 'English Grammar Check',
        description: 'An AI tool that checks and corrects grammar in your English text',
        category: 'writing',
        icon: '/templateIcons/grammerCheck.png',
        slug: 'english-grammar-check',
        prompt: 'Check and correct grammar in the provided English text, explain the mistakes in detail, and highlight the main portions for easy understanding. Provide the result with a heading at the top in Rich text editor format.',
        fromFields: [
            {
                label: 'Enter your text',
                type: 'textarea',
                name: 'text',
                required: true,
            },
        ],
    },
];
