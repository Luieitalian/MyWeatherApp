import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import moment from 'moment';

type DateTimeProps = {
  style: {
    date: object
  }
}

function DateTime({ style }: DateTimeProps) {
  const [date, setDate] = useState<string>(moment().format('MMMM Do, h:mm A'));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment().format('MMMM Do, h:mm A'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Text style={style.date}>{`${date}`}</Text>
  )
}

export default DateTime;