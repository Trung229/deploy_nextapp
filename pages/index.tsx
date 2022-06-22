import Head from 'next/head'
import useTrans from 'public/hooks/useTrans';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { userType } from './user.type'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useRouter } from 'next/router';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

export async function getServerSideProps(context: any) {
  const data = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
  return {
    props: {
      users: data
    }, // will be passed to the page component as props
  }
}

const Home = (props: any) => {
  const { users } = props;
  const trans = useTrans();
  const router = useRouter();
  const [age, setAge] = React.useState('vn')
  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value === 'en') {
      router.push('/', '/en', { locale: 'en' })
    } else {
      router.push('/', '/vi', { locale: 'vi' })
    }
    setAge(event.target.value);
  };

  return (
    <>
      <Head>
        <script
          src="https://browser.sentry-cdn.com/7.2.0/bundle.min.js"
          integrity="sha384-yvW0r7aI4VkwNfs/eOzYsODvXkNVQon3MBtow61jPf/pOR166EPvTSNBr9nG3C3y"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div >
        <h2 role="heading">{trans.home.title}</h2>
        <div style={{ width: "60%", marginTop: 20, marginLeft: 20 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>{trans.table.name}</TableCell>
                  <TableCell align="right">{trans.table.age}</TableCell>
                  <TableCell align="right">{trans.table.email}</TableCell>
                  <TableCell align="right">{trans.table.phone}</TableCell>
                  <TableCell align="right">{trans.table.address}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((row: userType) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                    <TableCell align="right">{row.website}</TableCell>
                    <TableCell align="right">{row.username}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div style={{ width: 400, display: 'flex', justifyContent: 'center', marginTop: 20, marginLeft: 10 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Lang</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Lang"
              onChange={handleChange}
            >
              <MenuItem value={'vn'}>vn</MenuItem>
              <MenuItem value={'en'}>en</MenuItem>
            </Select>
          </FormControl>
        </div>
        <button onClick={() => { throw new Error('Required') }}>Error</button>
      </div >
    </>
  )
}

export default Home
