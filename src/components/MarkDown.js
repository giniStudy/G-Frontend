import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const MarkDownStyle = styled.div`
    font-size : 1rem;
    line-height : 2.5rem;
`;

const InlineCode =  styled.span`
    background-color : darkgray;
    color: white;
`;


function InlineCodeBlock (children) {
    return (
        <InlineCode>{children.value}</InlineCode>
    );
};

export default function MarkDown ({children}){

    const renderers = {
        "inlineCode" : InlineCodeBlock
    }
    return (
        <MarkDownStyle>
            <ReactMarkdown renderers={renderers}
            >
                {children}
            </ReactMarkdown>
        </MarkDownStyle>
    );
};