import { requireNextAuth } from '@roq/nextjs';
import HomeLayout from 'layout/home-layout';
import { Box, Heading, Text, Stack, Image, Link, useDisclosure, ListItem, UnorderedList, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { CustomButton } from 'components/custom-button';
import Head from 'next/head';
import { PoweredBy } from 'components/powered-by';
import { HelpBox } from 'components/help-box';
import { useBanner } from 'lib/hooks/use-banner';
import ConfigureCodeBanner from 'components/configure-code-banner';
import { appConfig } from 'config';
import { useRoqClient } from 'lib/roq';

const Card: FC<{
  userTypeName: string;
  onSignup?: () => void;
  onLogin?: () => void;
  rootClass?: string;
  type?: string;
  abilities?: string[];
}> = ({ userTypeName, rootClass = '', type = '', abilities = [] }) => {
  const roqClient = useRoqClient();
  return (
    <Flex
      width={{ md: '310px' }}
      bgColor="base.200"
      p="18px"
      border="1px solid"
      borderColor="base.300"
      borderRadius="8px"
      className={rootClass}
      direction="column"
    >
      <Text fontSize="xl" color="base.content" fontWeight={600}>
        {userTypeName}
      </Text>
      <Text mb="1.5rem" fontSize="0.875rem" lineHeight="1.3125rem" color={'#52557A'} fontWeight="400">
        {`As an ${userTypeName} you will be able to:`}
        <UnorderedList
          stylePosition="outside"
          css={{
            listStyleType: 'none',
            '> li::before': {
              content: '"•"',
              position: 'absolute',
              marginLeft: '-1em',
              fontSize: '1.5em',
            },
          }}
        >
          {abilities.slice(0, 4).map((e, i) => (
            <ListItem key={i} position="relative" pl="1em">
              {e}
            </ListItem>
          ))}
        </UnorderedList>
      </Text>
      <Box display="flex" flex="auto" alignItems="flex-end">
        <CustomButton flex={1} weight="primary" _hover={{ bg: 'primary.focus' }} onClick={() => roqClient.signUp(type)}>
          Signup
        </CustomButton>
        <CustomButton
          onClick={() => roqClient.signIn(type)}
          flex={{ base: 1, lg: '0 0 131px' }}
          weight="secondary"
          ml="12px"
        >
          Login
        </CustomButton>
      </Box>
    </Flex>
  );
};

function HomePage() {
  const helpBoxDisclosure = useDisclosure();
  const { isBannerVisible, setIsBannerVisible } = useBanner();
  return (
    <>
      <Head>
        <title>{`Todoapp`}</title>

        <meta
          name="description"
          content="Todoapp - Simplifying Your Daily Tasks. A Todo List App that Helps You Organize Your Day, Prioritize Your Tasks, and Stay on Top of Your Responsibilities."
        />
      </Head>
      <ConfigureCodeBanner
        isHelpBoxVisible={helpBoxDisclosure.isOpen}
        isBannerVisible={isBannerVisible}
        setIsBannerVisible={setIsBannerVisible}
      />
      <HomeLayout>
        <Box position="relative" display="flex" flex={{ lg: '0 0 485px' }} height={{ base: '180px', lg: 'auto' }}>
          <Image
            flex="1"
            src={
              'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjA3NjB8MHwxfHNlYXJjaHwxfHx0b2RvJTIwbGlzdHxlbnwwfHx8fDE2OTk4OTY0NzZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
            }
            alt="Dinner"
            objectFit="cover"
            objectPosition="center"
          />
          <Box position="absolute" top="0" backgroundColor="rgba(0,0,0,0.6)" width="100%" py="2">
            <Text align="center" fontSize="sm" color="white">
              Photo by{' '}
              <Link
                href="https://unsplash.com/@glenncarstenspeters?utm_source=roq-generator&utm_medium=referral"
                isExternal
                color="teal.200"
              >{`Glenn Carstens-Peters`}</Link>{' '}
              on{' '}
              <Link
                href="https://unsplash.com/?utm_source=roq-generator&utm_medium=referral"
                isExternal
                color="teal.200"
              >
                Unsplash
              </Link>
            </Text>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          padding={{ base: '32px 16px', lg: '32px 64px', xl: '64px 128px' }}
          overflow="auto"
        >
          <Box>
            <Heading mb={{ base: '12px', lg: '20px' }} size="2xl">
              {`Todoapp`}
            </Heading>
            <Text size="2xl" mb={{ base: '32px', lg: '48px' }} color="base.content" opacity="0.6">
              {`Todoapp - Simplifying Your Daily Tasks. A Todo List App that Helps You Organize Your Day, Prioritize Your Tasks, and Stay on Top of Your Responsibilities.`}
            </Text>
            <Box
              className="roles-container"
              display={'flex'}
              flexDirection={'column'}
              w={{ base: '100%', md: 'fit-content' }}
            >
              <Stack direction={{ md: 'row', base: 'column' }} spacing="1.5rem">
                <Card userTypeName="Owner" type="default" abilities={appConfig.ownerAbilities} />
              </Stack>
            </Box>
          </Box>
          <Box pt={4}>
            <HelpBox {...helpBoxDisclosure} />
            <PoweredBy />
          </Box>
        </Box>
      </HomeLayout>
    </>
  );
}

export default requireNextAuth({
  redirectIfAuthenticated: true,
  redirectTo: '/dashboard',
})(HomePage);
