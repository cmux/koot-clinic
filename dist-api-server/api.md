# 接口文档

## 1. 开始诊断接口

-   功能描述

    输入 url 和邮箱进行诊断（7 天之内读取原始的值，否则重新诊断）

-   请求说明

    > 请求方式：GET<br>

    请求 URL ：[/api/diagnose/](#)

-   请求参数

    ```json
    {
        "url": "http://www.baidu.com",
        "email": "2343242@qq.com"
    }
    ```

    | 字段  | 字段类型 | 字段说明 |
    | ----- | -------- | -------- |
    | url   | string   | 地址     |
    | email | string   | 邮箱     |

-   返回结果
    ```json
    {
        "result": true,
        "timestamp": 1573113803268
    }
    ```
    | 字段      | 字段类型 | 字段说明     |
    | --------- | -------- | ------------ |
    | result    | boolen   | 响应结果     |
    | timestamp | number   | 开始诊断时间 |

## 2. 获取网页诊断结果

-   功能描述

    获取网页的结果（永远读取当前 url 的最新诊断结果）

-   请求说明

    > 请求方式：GET<br>

    请求 URL ：[/api/result/](#)

-   请求参数

    ```json
    {
        "id": "sfdafa"
    }
    ```

    | 字段 | 字段类型 | 字段说明 |
    | ---- | -------- | -------- |
    | id   | string   | 结果地址 |

-   返回结果

        ```json
        {
        "emails": [
            "837990335@qq.com"
        ],
        "errors": {
            "broken request": [
                {
                    "id": "YTFlNWVjZDEtZjExNC00ZDViLWI4ZTctMjFkNzhmODJjYTJm",
                    "urlKey": "YmE1MDBiZDctYjQ0My00MTJhLWEzNTYtMjgwOWIyMDcyMjA3",
                    "everyQueryKey": "MzkxYmNlYTMtNjdlMi00ZjdhLWFiZjEtNDI3MjU4MjFmNTJl",
                    "message": "request `http://exam.yunkaixy.com/pc/exam` broken (404 Not Found)",
                    "type": "broken request",
                    "url": "http://exam.yunkaixy.com/pc/exam",
                    "createTime": "2019-11-07T06:25:37.000Z"
                }
            ],
            "console error": [
                {
                    "id": "NzZhMzRlYmItNmY0My00OTg5LTlmOWItNGYxNDFiYmE3Y2Qw",
                    "urlKey": "YmE1MDBiZDctYjQ0My00MTJhLWEzNTYtMjgwOWIyMDcyMjA3",
                    "everyQueryKey": "MzkxYmNlYTMtNjdlMi00ZjdhLWFiZjEtNDI3MjU4MjFmNTJl",
                    "message": "Navigation Timeout Exceeded: 30000ms exceeded",
                    "type": "common error",
                    "createTime": "2019-11-07T06:25:37.000Z"
                }
            ],
            "large file": [
                {
                    "id": "NTI2YTY0MzgtNDRlZi00NDdhLTgxOTQtMjMyM2E1YTMyYTdh",
                    "urlKey": "YmE1MDBiZDctYjQ0My00MTJhLWEzNTYtMjgwOWIyMDcyMjA3",
                    "everyQueryKey": "MzkxYmNlYTMtNjdlMi00ZjdhLWFiZjEtNDI3MjU4MjFmNTJl",
                    "message": "Failed to load resource: the server responded with a status of 404 (Not Found)",
                    "type": "console error",
                    "url": "http://exam.yunkaixy.com/pc/exam",
                    "locationUrl": null,
                    "createTime": "2019-11-07T06:25:37.000Z"
                }
            ],
            "no gzip": [
                {
                    "id": "MGI5NDQ1NGQtMzMzOS00Mzg1LWI4NTMtZTdmMjA0YTAxMDQ1",
                    "urlKey": "YmE1MDBiZDctYjQ0My00MTJhLWEzNTYtMjgwOWIyMDcyMjA3",
                    "everyQueryKey": "MzkxYmNlYTMtNjdlMi00ZjdhLWFiZjEtNDI3MjU4MjFmNTJl",
                    "message": "request `http://exam.yunkaixy.com/docs/assets/js/app.c417854b.js` is too large (≥ 300KB)",
                    "contentLength": "415278",
                    "type": "large file",
                    "pageUrl": "http://exam.yunkaixy.com/docs",
                    "threshold": "307200",
                    "url": "http://exam.yunkaixy.com/docs/assets/js/app.c417854b.js",
                    "createTime": "2019-11-07T06:25:37.000Z"
                }
            ],
            "common error": [
                {
                    "id": "ZmY1MDI4MGQtMmQxNi00NjIyLThlY2UtMzhmZjdkOTg5YmMy",
                    "urlKey": "YmE1MDBiZDctYjQ0My00MTJhLWEzNTYtMjgwOWIyMDcyMjA3",
                    "everyQueryKey": "MzkxYmNlYTMtNjdlMi00ZjdhLWFiZjEtNDI3MjU4MjFmNTJl",
                    "message": "request `http://exam.yunkaixy.com/pc/login` should be Gzip",
                    "type": "no gzip",
                    "contentLength": 9705,
                    "url": "http://exam.yunkaixy.com/pc/login",
                    "createTime": "2019-11-07T06:25:37.000Z"
                }
            ]
        },
        "url": "http://exam.yunkaixy.com/pc/login"

    }

    ```

    ```

| 字段   | 字段类型 | 字段说明   |
| ------ | -------- | ---------- |
| email  | string   | 邮箱       |
| url    | string   | 诊断的地址 |
| errors | object   | 报错数据   |

> errors

| 字段           | 字段类型 | 字段说明   |
| -------------- | -------- | ---------- |
| broken request | object   | 请求失败   |
| console error  | object   | 控制台错误 |
| large file     | object   | 大文件     |
| no gzip        | object   | 未压缩     |
| common error   | object   | 普通错误   |

> keys

> errors

| 字段          | 字段类型 | 字段说明           |
| ------------- | -------- | ------------------ |
| id            | string   | id                 |
| urlKey        | string   | 相同 url 的 key    |
| everyQueryKey | string   | 每一次查询结果 key |
| message       | string   | 消息               |
| type          | string   | 错误类型           |
| url           | string   | 错误地址           |
| pageUrl       | string   | 诊断地址           |
| threshold     | string   |                    |
| contentLength | number   | 文件大小           |
| createTime    | string   | 信息创建时间       |

## 3. 获取历史信息

-   功能描述

    根据输入的域名，查询所有的当前域名下的诊断记录

-   请求说明

    > 请求方式：GET<br>

    请求 URL ：[/api/urlHistory/](#)

-   请求参数

    ```json
    {
        "url": "http://www.baidu.com"
    }
    ```

    | 字段 | 字段类型 | 字段说明     |
    | ---- | -------- | ------------ |
    | url  | string   | 地址或者地址 |

-   返回结果

    ```json
    [
        {
            "errors": {
                "broken request": [],
                "console error": [],
                "large file": [],
                "no gzip": [
                    {
                        "id": "YzExZGU5ZGEtOWY0My00YTlmLThlZWEtZmFmZDBlMTVlMmVl",
                        "urlKey": "YmE1YWE4ZjQtNGZkMy00ZmNhLTg0ZWMtMThhYTJlMGNmYjJh",
                        "everyQueryKey": "ZTg1ZGJmNGUtZGRiMS00MjdlLWE5NmYtOWQ5M2MxNjllMjZm",
                        "message": "request `https://lanhuapp.com/pdf/LanHu-ppt.pdf` is too large (≥ 300KB)",
                        "contentLength": "4649755",
                        "type": "large file",
                        "pageUrl": "https://lanhuapp.com/meeting?comeFrom=%E5%AE%98%E7%BD%91%E5%BA%95%E9%83%A8",
                        "threshold": "307200",
                        "url": "https://lanhuapp.com/pdf/LanHu-ppt.pdf",
                        "createTime": "2019-11-07T07:44:03.000Z"
                    }
                ],
                "common error": [
                    {
                        "id": "MmNiMTc2OTAtMzEwMy00M2E1LTk0NDMtY2Y4YjJiNjVmNzUw",
                        "urlKey": "YmE1YWE4ZjQtNGZkMy00ZmNhLTg0ZWMtMThhYTJlMGNmYjJh",
                        "everyQueryKey": "ZTg1ZGJmNGUtZGRiMS00MjdlLWE5NmYtOWQ5M2MxNjllMjZm",
                        "message": "request `https://lanhuapp.com/web/static/iconfont/material-icons.css` should be Gzip",
                        "type": "no gzip",
                        "contentLength": 970,
                        "url": "https://lanhuapp.com/web/static/iconfont/material-icons.css",
                        "createTime": "2019-11-07T07:44:03.000Z"
                    }
                ]
            },
            "clinic": {
                "id": "ODRlZDk3ZGYtNGQ1NC00YzUwLWI5ZmYtYTFmODUyNTQ5YzQ0",
                "urlKey": "YmE1YWE4ZjQtNGZkMy00ZmNhLTg0ZWMtMThhYTJlMGNmYjJh",
                "everyQueryKey": "ZTg1ZGJmNGUtZGRiMS00MjdlLWE5NmYtOWQ5M2MxNjllMjZm",
                "email": "837990335@qq.com",
                "url": "https://lanhuapp.com/web/#/item/project/board?pid=72360219-533a-48f3-8927-f9ac0e7e6f48&teamId=ad63a781-7423-4841-aa96-c7b1a72c58d6",
                "status": 0,
                "clinicTimes": null,
                "clinicPages": null,
                "specialPages": null,
                "createTime": "2019-11-07T08:03:23.000Z"
            }
        }
    ]
    ```

    | 字段   | 字段类型 | 字段说明                 |
    | ------ | -------- | ------------------------ |
    | erros  | boolen   | 错误信息（字段如接口 2） |
    | clinic | object   | 诊断的信息               |
