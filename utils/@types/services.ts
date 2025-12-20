export type Service = {
  type: ServicesType;
  icon: string;
};

export enum ServicesType {
  WEB_DEVELOPMENT = 'web_development',
  API_DEVELOPMENT = 'api_development',
  DATABASE_MANAGAMENT = 'database_management',
  UIUX_DESIGN = 'uiux_design',
  PERFORMANCE_OPTIMIZATION = 'performance_optimization',
  TESTING_QA = 'testing_qa',
  SECURITY = 'security',
  SAAS_SOLUTIONS = 'saas_solutions',
  AI_INTEGRATION = 'ai_integration',
  CONTEINERIZATION_DEPLOYMENT = 'containerization_deployment'
};