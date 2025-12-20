import { Service, ServicesType } from '../@types/services';

import AiIcon from '@/assets/icons/AI.svg';
import ApiIcon from '@/assets/icons/APIIcon.svg';
import TestIcon from '@/assets/icons/TestIcon.svg';
import SaasIcon from '@/assets/icons/SaasIcon.svg';
import DockerIcon from '@/assets/icons/Docker.svg';
import DesignIcon from '@/assets/icons/DesignIcon.svg';
import DatabaseIcon from '@/assets/icons/DatabaseIcon.svg';
import SecurityIcon from '@/assets/icons/SecurityIcon.svg';
import OptimizationIcon from '@/assets/icons/OptimizationIcon.svg';
import WebDevelopmentIcon from '@/assets/icons/WebDevelopmentIcon.svg';

export const services: Service[] = [
  {
    icon: WebDevelopmentIcon,
    type: ServicesType.WEB_DEVELOPMENT
  },
  {
    icon: ApiIcon,
    type: ServicesType.API_DEVELOPMENT
  },
  {
    icon: DatabaseIcon,
    type: ServicesType.DATABASE_MANAGAMENT
  },
  {
    icon: DesignIcon,
    type: ServicesType.UIUX_DESIGN
  },
  {
    icon: OptimizationIcon,
    type: ServicesType.PERFORMANCE_OPTIMIZATION
  },
  {
    icon: TestIcon,
    type: ServicesType.TESTING_QA
  },
  {
    icon: SecurityIcon,
    type: ServicesType.SECURITY
  }, {
    icon: SaasIcon,
    type: ServicesType.SAAS_SOLUTIONS
  },
  {
    icon: AiIcon,
    type: ServicesType.AI_INTEGRATION
  },
  {
    icon: DockerIcon,
    type: ServicesType.CONTEINERIZATION_DEPLOYMENT
  }
];