import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import Banner from  '../../../assets/images/banner.jpg'

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
        <img
      src={Banner}
      alt='banner'
      style={{ width: '95%', height: 'auto', maxHeight: '300px', borderRadius: '15px', margin: '20px auto 0 auto' }}
    />

<Grid item xs={12}>
  <Grid container spacing={gridSpacing} justifyContent="center">
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <EarningCard isLoading={isLoading} />
    </Grid>
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <EarningCard isLoading={isLoading} />
    </Grid>
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <EarningCard isLoading={isLoading} />
    </Grid>
  </Grid>
</Grid>
      {/* <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid> */}
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} style={{ width: '100%' }}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
