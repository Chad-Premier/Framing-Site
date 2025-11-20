/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly URL: string;
  readonly GEO_REGION: string;
  readonly GEO_POSITION_LONG: number;
  readonly GEO_POSITION_LAT: number;
  readonly ICBM_LAT: number;
  readonly ICBM_LONG: number;
  readonly CATEGORY_LIST_LIMIT: number;
  readonly POST_SUMMARY_LIMIT: number;
  readonly RECENT_LIST_LIMIT: number;
  readonly FEATURE_RECENT_LIST_LIMIT: number;
  readonly TAG_LIST_LIMIT: number;
  readonly ROBOTS_ENABLED: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}