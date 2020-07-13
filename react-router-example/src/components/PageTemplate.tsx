import React from 'react';
import {MainMenu} from './index';

function PageTemplate({children}:any) {
    return (
        <div className="page">
            <MainMenu />
            {children}
        </div>
    );
}

export default PageTemplate;