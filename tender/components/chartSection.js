import 'react-tabs/style/react-tabs.css';
import CustomerChart from './charts/CustomerChart';
import styles from '../styles/chartSection.module.css';
import {
  optionsPrice,
  optionsValue,
  optionsCount,
  optionsContracts,
  optionsPercent,
  optionsPercent2,
  optionsTopSupplierValue,
  optionsTopSupplierGoods,
  optionsTopCustomersValue,
  optionsTopCustomersGoods
} from '../src/constants';

const ChartSection = () => (
  <div className={styles.wrapper}>
    <div className={styles.wrapper__top}>
      <CustomerChart props={optionsPrice} />
      <CustomerChart props={optionsValue} />
      <CustomerChart props={optionsCount} />
    </div>
    <div className={styles.wrapper__middle}>
      <CustomerChart props={optionsContracts} />
    </div>
    <div className={styles.wrapper__bottom}>
      <CustomerChart props={optionsPercent} />
      <CustomerChart props={optionsPercent2} />
      <CustomerChart props={optionsTopSupplierValue} />
      <CustomerChart props={optionsTopCustomersValue} />
    </div>
    <div className={styles.wrapper__middle}>
      <CustomerChart props={optionsTopSupplierGoods} />
    </div>
    {/* 
    
    
    <CustomerChart props={optionsTopCustomersValue} />
    <CustomerChart props={optionsTopCustomersGoods} />
    <CustomerChart props={optionsDifferentPrice} />  */}
  </div>
);
export default ChartSection;
