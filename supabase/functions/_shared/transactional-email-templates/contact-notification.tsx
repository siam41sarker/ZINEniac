import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'ZINEniac'

interface ContactNotificationProps {
  source?: string
  firstName?: string
  lastName?: string
  name?: string
  email?: string
  phone?: string
  company?: string
  title?: string
  reason?: string
  message?: string
  eventTitle?: string
  eventDate?: string
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <Text style={row}>
      <span style={labelStyle}>{label}: </span>
      <span style={valueStyle}>{value}</span>
    </Text>
  ) : null

const ContactNotificationEmail = (props: ContactNotificationProps) => {
  const fullName =
    props.name ||
    [props.firstName, props.lastName].filter(Boolean).join(' ') ||
    undefined

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New {props.source || 'website'} submission on {SITE_NAME}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Submission</Heading>
          <Text style={subtitle}>
            From: {props.source || 'Website form'}
          </Text>
          <Hr style={hr} />
          <Section>
            <Row label="Name" value={fullName} />
            <Row label="Email" value={props.email} />
            <Row label="Phone" value={props.phone} />
            <Row label="Company" value={props.company} />
            <Row label="Title" value={props.title} />
            <Row label="Reason" value={props.reason} />
            <Row label="Event" value={props.eventTitle} />
            <Row label="Event Date" value={props.eventDate} />
            {props.message ? (
              <>
                <Hr style={hr} />
                <Text style={labelStyle}>Message:</Text>
                <Text style={messageStyle}>{props.message}</Text>
              </>
            ) : null}
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            This message was sent from the {SITE_NAME} website.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: ContactNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New ${data.source || 'website'} submission${data.firstName || data.name ? ` from ${data.name || data.firstName}` : ''}`,
  displayName: 'Contact form notification',
  to: 'ZINEniac@gmail.com',
  previewData: {
    source: 'Contact Page',
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    phone: '+1 555 123 4567',
    reason: 'General Inquiry',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '560px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#111111', margin: '0 0 6px' }
const subtitle = { fontSize: '13px', color: '#666666', margin: '0 0 12px' }
const hr = { borderColor: '#eeeeee', margin: '16px 0' }
const row = { fontSize: '14px', color: '#222222', margin: '6px 0' }
const labelStyle = { fontWeight: 'bold' as const, color: '#444444' }
const valueStyle = { color: '#222222' }
const messageStyle = { fontSize: '14px', color: '#222222', lineHeight: '1.5', whiteSpace: 'pre-wrap' as const, margin: '4px 0 0' }
const footer = { fontSize: '12px', color: '#999999', margin: '20px 0 0' }
