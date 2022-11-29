import React from 'react';
import NextPage from "./NextPage";

function NextPageContent({...restProps}) {
    return (
        <NextPage to="/contact"id='scroll_down1' text="Dare and contact us immediately!" {...restProps}>
            We are hiring
        </NextPage>
    );
}

export default NextPageContent;