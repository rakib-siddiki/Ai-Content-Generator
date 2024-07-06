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
              options?: undefined;
          }
        | {
              label: string;
              type: string;
              options: string[];
              name: string;
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
        prompt: 'Give me 5 blog topic ideas in bullet-wise format based on the given niche & outline and provide the result in Rich text editor format',
        fromFields: [
            {
                label: 'Enter your blog niche',
                type: 'input',
                name: 'niche',
            },
            {
                label: 'Enter blog outline',
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
        prompt: 'Provide a list of 10 SEO keywords based on the given content and target audience, and display the result in Rich text editor format',
        fromFields: [
            {
                label: 'Enter your content topic',
                type: 'input',
                name: 'topic',
            },
            {
                label: 'Enter target audience',
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
        prompt: 'Generate 5 social media post ideas based on the given campaign goals and preferred platform, and provide the result in Rich text editor format',
        fromFields: [
            {
                label: 'Enter campaign goals',
                type: 'textarea',
                name: 'goals',
            },
            {
                label: 'Select preferred platform',
                type: 'select',
                options: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'],
                name: 'platform',
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
        prompt: 'Provide 5 compelling email subject lines based on the given email content and target audience, and display the result in Rich text editor format',
        fromFields: [
            {
                label: 'Enter email content summary',
                type: 'textarea',
                name: 'contentSummary',
            },
            {
                label: 'Enter target audience',
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
        prompt: 'Generate 3 engaging product descriptions based on the given product details and target market, and provide the result in Rich text editor format',
        fromFields: [
            {
                label: 'Enter product name',
                type: 'input',
                name: 'productName',
            },
            {
                label: 'Enter product features',
                type: 'textarea',
                name: 'features',
            },
            {
                label: 'Enter target market',
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
        prompt: 'Provide an outline for a video script based on the given video topic and goals, and display the result in Rich text editor format',
        fromFields: [
            {
                label: 'Enter video topic',
                type: 'input',
                name: 'topic',
            },
            {
                label: 'Enter video goals',
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
        prompt: 'Detect bugs in the provided code and highlight the issues in Rich text editor format',
        fromFields: [
            {
                label: 'Enter your code',
                type: 'textarea',
                name: 'code',
            },
        ],
    },
    {
        title: 'Explain Code',
        description: 'An AI tool that explains what a given code snippet does',
        category: 'programming',
        icon: '/templateIcons/codeExplain.png',
        slug: 'explain-code',
        prompt: 'Explain the functionality of the provided code snippet in detail and display the result in Rich text editor format',
        fromFields: [
            {
                label: 'Enter your code snippet',
                type: 'textarea',
                name: 'codeSnippet',
            },
        ],
    },
    {
        title: 'Write Code',
        description: 'An AI tool that generates code based on your requirements',
        category: 'programming',
        icon: '/templateIcons/writeCode.png',
        slug: 'write-code',
        prompt: 'Generate code based on the given requirements and programming language, and display the result in Rich text editor format',
        fromFields: [
            {
                label: 'Enter your requirements',
                type: 'textarea',
                name: 'requirements',
            },
            {
                label: 'Select programming language',
                type: 'select',
                options: ['JavaScript', 'Python', 'Java', 'C#', 'C++'],
                name: 'language',
            },
        ],
    },
    {
        title: 'English Grammar Check',
        description: 'An AI tool that checks and corrects grammar in your English text',
        category: 'writing',
        icon: '/templateIcons/grammerCheck.png',
        slug: 'english-grammar-check',
        prompt: 'Check and correct grammar in the provided English text and display the corrected text in Rich text editor format',
        fromFields: [
            {
                label: 'Enter your text',
                type: 'textarea',
                name: 'text',
            },
        ],
    },
];
