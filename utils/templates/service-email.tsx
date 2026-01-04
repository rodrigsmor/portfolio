import { Html, Body, Container, Text, Heading, Hr, Preview } from '@react-email/components';

export const ServiceEmail = ({ firstName, description }: { firstName: string, description: string }) => (
  <Html>
    <Preview>Nova mensagem de contato de {firstName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Olá, Rodrigo!</Heading>
        <Text style={text}>Você recebeu uma nova proposta de <strong>{firstName}</strong>:</Text>
        <Hr style={hr} />
        <Text style={descriptionText}>{description}</Text>
      </Container>
    </Body>
  </Html>
);

const main = { backgroundColor: '#f6f9fc', padding: '10px 0' };
const container = { backgroundColor: '#ffffff', border: '1px solid #f0f0f0', padding: '45px' };
const h1 = { color: '#333', fontSize: '24px', fontWeight: 'bold' };
const text = { color: '#333', fontSize: '16px' };
const descriptionText = { fontStyle: 'italic', color: '#555' };
const hr = { borderColor: '#e6ebf1', margin: '20px 0' };