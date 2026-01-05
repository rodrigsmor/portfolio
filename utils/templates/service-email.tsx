import { ContactFormData } from '../@types/contact';
import { Html, Body, Container, Text, Heading, Hr, Preview, Section, Row, Column } from '@react-email/components';
import { LanguageCode } from '../@types/lang';
import { budgetRangeOptions, currencyOptions, durationOptions } from '../consts/contact-form';
import { PathToDot } from '../hooks/useTranslate';
import { Dictionary } from '../functions/dictionaries';

const dictionary = await import('@/i18n/pt-BR.json').then((module) => module.default as Dictionary)

const t = (path: PathToDot<Dictionary>): string => {
  const value = path.split('.').reduce((acc: unknown, key: string) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, dictionary);

  return typeof value === 'string' ? value : path;
};

export default function ServiceEmail({ data, lang }: { data: ContactFormData, lang: LanguageCode }) {
  const {
    email,
    firstName,
    lastName,
    budgetRange,
    currency,
    estimatedDuration,
    projectDescription,
    phoneNumber
  } = data;

  const selectedBudgetRange = budgetRangeOptions.find((item) => item.value === budgetRange) ?? budgetRangeOptions[0];
  const selectedCurrency = currencyOptions.find((item) => item.value === currency) ?? currencyOptions[0];
  const selectedEstimatedDuration = durationOptions.find((item) => item.value === estimatedDuration) ?? durationOptions[0];

  return (
    <Html>
      <Preview>Nova mensagem de contato de {firstName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Olá, Rodrigo!</Heading>
          <Text style={headingDescription}>
            Parece que temos boas novas! Recebemos uma proposta de serviço de
            <strong>{` ${firstName}`}!
              Dá uma conferida abaixo!</strong>
          </Text>
          <Text><strong>Lingua: </strong>{lang}</Text>
          <Hr style={hr} />
          <Container style={dataContainer}>
            <Section style={rowData}>
              <Text style={dataTitle}>Nome Completo:</Text>
              <Text style={dataContent}>{firstName} {lastName}</Text>
            </Section>
            <Row
              style={{
                display: 'flex',
                width: '100%',
                minWidth: '100%',
                maxWidth: '100%',
                marginTop: '14px'
              }}
            >
              <Column style={{ width: '20%' }}>
                <Text style={dataTitle}>E-mail de Contato:</Text>
                <Text style={dataContent}>{email}</Text>
              </Column>
              <Column style={{ paddingLeft: '14px', width: '20%' }}>
                <Text style={dataTitle}>Telefone de Contato:</Text>
                <Text style={dataContent}>{phoneNumber ?? 'Não Informado'}</Text>
              </Column>
            </Row>
            <Row
              style={{
                display: 'flex',
                width: '100%',
                minWidth: '100%',
                marginTop: '14px'
              }}
            >
              <Column style={{ width: '25%', maxWidth: '25%' }}>
                <Text style={dataTitle}>Faixa de orçamento:</Text>
                <Text style={dataContent}>{t(selectedBudgetRange.label)}</Text>
              </Column>
              <Column style={{ width: '20%' }}>
                <Text style={dataTitle}>Moeda Preferencial:</Text>
                <Text style={dataContent}>{t(selectedCurrency.label)}</Text>
              </Column>
              <Column style={{ width: '20%' }}>
                <Text style={dataTitle}>Duração Estimada:</Text>
                <Text style={dataContent}>{t(selectedEstimatedDuration.label)}</Text>
              </Column>
            </Row>
            <Hr style={hr} />
            <Section style={rowData}>
              <Text style={dataTitle}>Descrição do Projeto:</Text>
              <Text style={descriptionText}>{projectDescription}</Text>
            </Section>
          </Container>
        </Container>
      </Body>
    </Html>
  );
}

// firstName: string;
// lastName: string;
// email: string;
// phoneNumber?: string;
// budgetRange?: BudgetRange;
// currency?: Currency;
// estimatedDuration?: ProjectDuration;
// projectDescription: string;

const main = {
  padding: '3rem 0',
  backgroundColor: '#0C0816',
  fontFamily: `"Verdana", 'Helvetica', sans-serif`,
};

const container = {
  width: '89dvw',
  maxWidth: '89dvw',
  overflow: 'hidden',
  // padding: '8dvw',
  color: '#F0ECF8',
  backgroundColor: '#0C0816',
  // border: '1px solid rgba(240, 240, 240, 0.1)',
};

const h1 = {
  fontSize: '2rem',
  fontWeight: 'bold'
};

const headingDescription = {
  width: '100%',
  maxWidth: '100%',
  color: '#D1C7EB',
  fontSize: '1.125rem',
  fontWeight: '200',
};

const dataContainer = {
  margin: 0,
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  padding: '4.5dvw',
  borderRadius: '14px',
  backgroundColor: '#1B1231',
  border: '1px solid rgba(240, 240, 240, 0.1)',
  fontFamily: `"Courier New", 'Helvetica', sans-serif`,
};

const rowData = {
  display: 'flex',
  margin: 0,
  padding: 0,
  width: '100%',
  minWidth: '100%',
  borderRadius: '14px',
};

const dataTitle = {
  margin: 0,
  padding: 0,
  color: '#C2B4E4',
  fontWeight: '200',
  fontSize: '0.875rem',
}

const dataContent = {
  margin: 0,
  padding: 0,
  fontWeight: '600',
  fontSize: '1rem'
}


const descriptionText = {
  fontStyle: 'italic',
  fontSize: '1.125rem',
  color: '#F0ECF8',
  padding: 0,
  margin: 0,
  fontFamily: `"Garamond", serif`
};
const hr = { width: '100%', minWidth: '100%', border: '1px solid rgba(240, 240, 240, 0.1)', borderColor: 'rgba(240, 240, 240, 0.1)', margin: '20px 0' };