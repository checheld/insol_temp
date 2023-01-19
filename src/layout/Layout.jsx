import React from 'react';

import MainScrollBar from "./MainScrollBar";
import type {SmoothScrollbarProps} from "./SmoothScrollbar";
import DroowMenu from "../components/header/menu/DroowMenu";
import LoadingPage from "../hooks/LoadingPage";
import CustomCursor from "./CustomCursor";
import ThemeColor from "./ThemeColor";

interface LayoutProps extends SmoothScrollbarProps {
    tag?: React.ElementType,
    activeScrollbar?: boolean,
    setTheme: () => void
}

function Layout(
    {className, children, tag: Tag = "div", activeScrollbar, setTheme, ...restProps}: LayoutProps) {

    return (
        <Tag id="main_layout" className={className}>
            <DroowMenu hamburger/>
            <ThemeColor setTheme={setTheme} />
            <LoadingPage/>
            {/* {activeScrollbar ? <MainScrollBar  {...restProps}>{children}</MainScrollBar> : children} */}
            <MainScrollBar {...restProps}>{children}</MainScrollBar>         
            <CustomCursor
                duration={0.5}
                durationChangeSize={0.3}
                size={30}
                scale={75}
                ease="power2.out"
            />
        </Tag>
    );
}

export default Layout;