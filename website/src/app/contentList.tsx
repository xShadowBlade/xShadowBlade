/**
 * @file Defines the content and description of various games or projects
 */

type Content = Readonly<{
    /**
     * The title of the content
     */
    title: string | JSX.Element;

    /**
     * The description of the content
     */
    description: string | JSX.Element;

    /**
     * The image of the content
     */
    image?: string | JSX.Element;

    /**
     * The link to the content
     */
    link: string;
}>;

const contentList: Content[] = [
    {
        title: "emath.js",
        description: <>
            A library for incremental games based on break_eternity.js
        </>,
        // image: "/emath.svg",
        link: "https://github.com/xShadowBlade/emath.js",
    },
];

export { contentList };
export type { Content };