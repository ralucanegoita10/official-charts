import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import { Link } from 'react-router-dom';
import LatestNews from '../../features/user/components/LatestNews';
import LatestChartsForWeek from '../../features/user/components/LatestChartsForWeek';
import LatestChartsInsights from '../../features/user/components/LatestChartsInsights';
import './Welcome.css';

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: '' }));
  }, [dispatch]);

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="w-1/3">
          <LatestChartsForWeek />
        </div>
        <div className="w-1/3">
          <LatestChartsInsights />
        </div>
        <div className="w-1/3">
          <LatestNews />
        </div>
      </div>
    </div>
  );
}

export default InternalPage;
