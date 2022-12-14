import BaseCard from '../../Base/BaseCard'
import { SiTwitter } from 'react-icons/si'

export default function TwitterCard({ twitterSocialLink = {} }) {
  const { username, url, description } = twitterSocialLink

  return (
    <BaseCard
      username={`@${username}`}
      url={url}
      description={description}
      jsxIcon={<SiTwitter />}
      customCardClasses='dark:bg-opacity-20 bg-gradient-to-l from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-600 hover:shadow-[10px_10px_0px_var(--twitter-color)]'
    />
  )
}
