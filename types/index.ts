/* eslint-disable @typescript-eslint/no-explicit-any */

import { CrawlerResult, CrawlerError } from 'koot-diagnose/crawler';
import { Result as PSIResult } from 'koot-diagnose/psi';
import { LocationShape } from 'react-router/lib/PropTypes';

// React 相关 ==================================================================
export interface UIState {
    [metaKey: string]: any;
}

export interface StoreState {
    localeId: string;
    routing: {
        locationBeforeTransitions: LocationShape;
    };
}

export interface RouteLocation {
    pathname: string;
    search: string;
    state: any;
    action: 'POP' | 'PUSH';
    key: any;
}
export interface RouteComponentProps {
    // location: LocationShape;
    location: RouteLocation;
    params: {
        [key: string]: any;
    };
    routeParams: {
        [key: string]: any;
    };
}

// 诊断结果 ====================================================================

// export interface DiagnoseError {
//     id?: string;
//     type?: string;
//     message?: string;
//     url?: string;
//     pageUrl?: string;
//     locationUrl?: string;
//     contentLength?: string;
//     threshold?: string;
// }
export interface DiagnoseError extends CrawlerError {
    [metaKey: string]: any;
}
export interface DiagnoseResult extends CrawlerResult {
    [metaKey: string]: any;
}
// export interface Result {
//     url: string;
//     emails: string[];
//     errors: {
//         [errorType: string]: DiagnoseError[];
//     };
// }
export interface Result {
    emails: string[];
    url: string;
    psi: PSIResult;
    errors: CrawlerResult;
}
export interface ClinicMetas {
    id: string;
    clinicPages?: string;
    clinicTimes?: string;
    createTime: string;
    email: string;
    everyQueryKey: string;
    specialPages?: string;
    status: number;
    url: string;
    urlKey: string;
}
export interface DiagnoseHistory {
    domain: string;
    nextScheduledTimestamp: number;
    results: DiagnoseHistoryResultItem[];
}
export interface DiagnoseHistoryResultItem {
    clinic: ClinicMetas;
    errors: CrawlerResult;
}
