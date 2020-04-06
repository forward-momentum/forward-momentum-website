/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';
import { withApollo } from '../lib/apollo';
import Layout, { Spacer } from '../components/Layout';
import { useRouter } from 'next/router';
import { SocialShareLinks } from '../components/Layout';
import { schema } from '../components/SignupForm';

const SignUp = () => {
  const router = useRouter()
  const { firstName, consentToEmail, consentToMessaging, consentToPhone } = schema.cast(router.query)
  const canBeContacted = consentToEmail || consentToMessaging || consentToPhone

  return (
    <Layout>
      <Box sx={{ variant: 'page.block', fontSize: 3 }}>
        <Box sx={{ variant: 'page.narrow' }}>
          <Box sx={{ p: [2, 4], borderRadius: 6, border: [null, '3px solid'] }}>
            <Heading>
              Thanks for signing up{firstName && ` ${firstName}`}!&nbsp;
              <Text sx={{ color: 'secondary', display: 'inline' }}>Now share the campaign in your network &rarr; build awareness and support</Text>
            </Heading>
            <Spacer />
            <SocialShareLinks fontSize={[30, 50]} color='secondary' />
            {canBeContacted && (<p>We'll be in touch soon.</p>)}
          </Box>
        </Box>
      </Box>
    </Layout>
  )
};

export default withApollo({ ssr: true })(SignUp)