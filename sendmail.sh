#!/bin/bash
if [ ! -f .env ]
then
  export $(cat .env.local | xargs)
fi

curl --location --request POST 'https://api.mailgun.net/v3/powerkernel.net/messages' \
--header 'Authorization: Basic '$MAILGUN_API \
--form 'from="Badminton Event <badminton@powerkernel.net>"' \
--form 'to="badminton@powerkernel.net"' \
--form 'subject="Upcoming Badminton Events"' \
--form 'template="badminton-event"'
