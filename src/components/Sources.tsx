import React, { useState } from "react";

import { ITableProps, kaReducer, Table } from "ka-table";
import { updateGroupsExpanded } from "ka-table/actionCreators";
import EmptyCells from "ka-table/Components/EmptyCells/EmptyCells";
import { IGroupRowProps } from "ka-table/props";
import { DispatchFunc } from "ka-table/types";
import { DataType, FilteringMode, PagingPosition, SortDirection } from 'ka-table/enums';

const dataArray = [
    { id: 1, name: "Kerala CMDRF", cause: "Goverment Organization", description: "Purchase COVID vaccine; Provide relief to persons affected by different disasters.", location: "Kerala", donate: "https://donation.cmdrf.kerala.gov.in/" },
    { id: 2, name: "PM CARES", cause: "Goverment Organization", description: "Contributions to support Indian government in fight against COVID.", location: "India", donate: "https://www.pmcares.gov.in/en/" },
    { id: 3, name: "Oxygen for India by Center for Disease Dynamics, Economics & Policy (CDDEP)", cause: "Oxygen Concentrator donation", description: "Supporting Oxygen for India; Produces independent, multidisciplinary research to advance the health and wellbeing of human populations around the world", location: "India", donate: "https://cddep.org/" },
    { id: 4, name: "Oxygen for India", cause: "Oxygen Concentrator donation", description: "Provide lifesaving medical oxygen to those who need it the most through the OxygenForIndia network", location: "India", donate: "https://oxygenforindia.org/" },
    { id: 5, name: "CARE", cause: "Essential supplies", description: "Help provide essential hospital services, more health workers, additional beds, oxygen supply etc.", location: "India", donate: "https://my.care.org/site/Donation2;jsessionid=00000000.app358b?df_id=29830&29830.donation=form1&mfc_pref=T&NONCE_TOKEN=C8F7E655D17E788A5A3C10857545E0A4&_ga=2.20459249.816249138.1619591370-2136912725.1619591370" },
    { id: 6, name: "SEWA", cause: "Essential supplies", description: "Raising funds for buying supplies, and ensuring that the much-needed lifesaving medical equipment like oxygen-concentrators and ventilators are acquired and shipped to hospitals across.", location: "India", donate: "https://www.sewausa.org/Donate-for-Covid-19-Support-Bharath-Fundraiser" },
    { id: 7, name: "Oxygen for India", cause: "Oxygen Concentrator donation", description: "GoFundMe drive by a Dr. in New Jersey. Dr. Shubha Varma.", location: "Delhi, Mumbai, Ahmedabad, Lucknow, Kolkata", donate: "https://www.gofundme.com/f/oxygen-for-india-lets-do-this-together?qid=a8dabe7df738cb70de3a9c9d2469bb27&utm_campaign=p_cp_url&utm_medium=os&utm_source=customer" },
    { id: 8, name: "Feeding India by Zomato", cause: "Essential supplies", description: "Providing hospitals and patients with oxygen and related supplies; Feeding the poor.", location: "India", donate: "https://www.feedingindia.org/donate/help-save-my-india" },
    { id: 9, name: "AAPI - American Association of Physicians of Indian Origin", cause: "Oxygen Concentrator donation", description: "Providing oxygen concentrators.", location: "India", donate: "https://events.aapiusa.org/medical-oxygen-iama/" },
    { id: 10, name: "Aluva First Line Treatment Center", cause: "Goverment Organization", description: "Official request came from Aluva Municipal Vice Chairman to raise funds to set up First Line Treatment Centers in Aluva for economically backward first stage Coivid patients.", location: "Aluva, Kerala", donate: "Account No(Aluva Municipality) - Federal Bank Account No: 10010100465290. IFSC: FDRLOOOIOOI" },
    { id: 11, name: "Unicef", cause: "Oxygen Concentrator donation", description: "Provide essential life-saving equipment like oxygen concentrators, RT-PCR testing machines, and oxygen generation plants.", location: "India", donate: "https://www.unicefusa.org/stories/india-faces-brutal-covid-19-crisis-unicef-there-help/38520?form=FUNVSQSRNWW" },
    { id: 12, name: "Shaheed Bhagat singh seva dal", cause: "Cremation Support", description: "Help in cremation and other support.", location: "Delhi", donate: "http://sbsfoundation.org/" },
    { id: 13, name: "Hemkunt Foundation", cause: "Oxygen Concentrator donation", description: "Provide oxygen cylinders.", location: "Delhi", donate: "https://hemkuntfoundation.com/oxygen-cylinder/" },
    { id: 14, name: "Feeding From Far", cause: "Food supply", description: "Feeding From Far is an initiative that has been feeding the poor and unemployed who are struggling to feed themselves during the lockdown.", location: "India", donate: "https://www.ketto.org/fundraiser/FeedingfromfarForCorona" },
    { id: 15, name: "Goonj Rahat Covid-19", cause: "Essential supplies", description: "Reach comprehensive family kits of essentials – largely dry ration, personal care material to the affected communities in areas well known for migration and related geographies.", location: "India", donate: "https://fundraisers.giveindia.org/fundraisers/rahat-covid19" },
    { id: 16, name: "Mazdoor Kitchen", cause: "Food supply", description: "Mazdoor Kitchen is a citizen run voluntary initiative, working to provide meals and subsistence to daily wage workers in North Delhi.", location: "Delhi", donate: "https://www.ketto.org/fundraiser/mazdoorkitchen" },
    { id: 17, name: "Mental Health Need for Covid 19 warriors", cause: "Mental Health", description: "Our agenda is to mobilise funds to support the mental health needs of COVID-19 frontline workers and relief volunteers by providing free support groups, therapy and access to a helpline to them.", location: "India", donate: "https://www.ourdemocracy.in/Campaign/covid19mentalhealth" },
    { id: 18, name: "Give2Asia", cause: "Essential supplies", description: "Emergency medical supplies to frontline workers, including personal protective equipment (PPE), hand sanitizers, soap, and disinfectant sprays, Nutritious meals, including cooked meals and dry rations Financial support to marginalized families.", location: "India", donate: "https://give2asia.org/covid-19-pandemic-response-india/" },
    { id: 19, name: "Plasma Donor Support", cause: "Plasma Donation", description: "Building a network of plasma across India for the recovery of COVID-19 patients.", location: "India", donate: "https://pintnetwork.com/home" },
    { id: 20, name: "Support Mumbai Dabbawallas", cause: "Financial Support", description: "Help support mumbai dabbawalas.", location: "India", donate: "https://milaap.org/fundraisers/support-mumbai-dabbawala" },
    { id: 21, name: "Our democracy", cause: "Financial Support", description: "This campaign aims to raise funds for daily wagers who don't have the luxury of working from home and are struggling to survive during the Covid 19 pandemic.", location: "Delhi", donate: "https://www.ourdemocracy.in/Campaign/covid19Delhi" },
    { id: 22, name: "Give India", cause: "Financial Support", description: "GiveIndia was born on April 28, 2000 out of the belief that equal opportunity is the cornerstone of civilization. All human beings must have the same opportunity to succeed in life, irrespective of the circumstances they were born into.", location: "India", donate: "https://fundraisers.giveindia.org/fundraisers/support-covid-19-hit-families-kq3aavvjh" },
    { id: 23, name: "Coro", cause: "Essential supplies", description: "Distribute food packages, masks, sanitizers and soap to people who have been hit by the short-term closure of businesses.", location: "Mumbai", donate: "https://milaap.org/fundraisers/support-luis-miranda" },
    { id: 24, name: "Hasiru Dala", cause: "Essential supplies", description: "Hasiru Dala provided hygiene kits, protein kits and other special kits for children. These kits were provided to young children, lactating mothers, and pregnant women. The hygiene kits have been specially devised keeping in view the needs of target groups.", location: "Bangalore", donate: "https://hasirudala.in/initiatives/covid-19/" },
    { id: 25, name: "Protsahan India Foundation", cause: "Financial Support", description: "support more families, especially pregnant women, sex workers, manual scavengers & those at the bottom of the access pyramid in urban Delhi slums.", location: "Delhi", donate: "https://www.ketto.org/fundraiser/protsahanforcovid19relief" },
    { id: 26, name: "PAIGAM", cause: "Financial Support", description: "Protsahan’s team has been relentlessly following up by providing dry rations and cooked meals with support from partner organizations and individuals. Our teams have visited some of the hardest-hit communities of daily wage workers where food and medical aid is urgently needed for pregnant women and children.", location: "Delhi", donate: "https://paigam.network/work/delhi-waste-pickers-fight-against-corona/" },
    { id: 27, name: "NEMA Fundraising", cause: "Oxygen Concentrator donation", description: "NEMA is raising funds for American Association of Physicians of Indian Origin. AAPI is working with suppliers in the US to source Oxygen Concentrators and Ventilators to directly send to India.", location: "India", donate: "https://www.facebook.com/donate/173905924506712/?fundraiser_source=whatsapp_share" },
    { id: 28, name: "Chopra foundation", cause: "Medical Help", description: "As India faces an overwhelming surge of record-breaking COVID-19 cases and deaths, the Chopra Foundation would like to invite our Global Family to fund and support the Heart Care Foundation of India which will oversee the support for Covid patients", location: "India", donate: "https://www.gofundme.com/f/india-covid-surge-relief?utm_campaign=p_cp_url&utm_medium=os&utm_source=customer" }
];

const GroupRow: React.FunctionComponent<IGroupRowProps> = ({
  contentColSpan,
  groupIndex,
  isExpanded,
  dispatch,
  text,
  groupKey
}) => (
  <>
    <EmptyCells count={groupIndex} />
    <td className="ka-group-cell" colSpan={contentColSpan}>
      <button
        onClick={() => dispatch(updateGroupsExpanded(groupKey))}
        style={{ marginRight: 5 }}
      >
        {isExpanded ? "-" : "+"}
      </button>
      {text}
    </td>
  </>
);

const tablePropsInit: ITableProps = {
  columns: [
    {
      dataType: DataType.String,
      key: "name",
      title: "NAME",
      style: { fontWeight: 'bold' }
    },
    {
      dataType: DataType.String,
      key: "cause",
      title: "CAUSE",
      sortDirection: SortDirection.Ascend
    },
    {
      dataType: DataType.String,
      key: "description",
      title: "DESCRIPTION"
    },
    {
      dataType: DataType.String,
      key: "location",
      title: "LOCATION"
    },
    {
        dataType: DataType.String,
        key: "donate",
        title: "HOW TO DONATE",
        style:  {}
    }
  ],
  format: ({ column, value }) => {
    if (column.key === 'donate'){
      return ` <a href=${value}>${value}</a>`;
    }
},
  data: dataArray,
  groups: [{ columnKey: "cause" }],
  filteringMode: FilteringMode.FilterRow,
  paging: {
    enabled: true,
    pageIndex: 0,
    pageSize: 10,
    position: PagingPosition.Bottom
  },
  rowKeyField: "id"
};

const GroupingCustomRowDemo: React.FC = () => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const dispatch: DispatchFunc = action => {
    changeTableProps((prevState: ITableProps) => kaReducer(prevState, action));
  };
  return (
    <Table
      {...tableProps}
      childComponents={{
        groupRow: {
          content: GroupRow
        },
        dataRow: {
            elementAttributes: ({ rowData }) => ({
              style: {
                backgroundColor: 'rgba(255, 0, 0, 0.1)'
              },
              title: `${rowData.name}: ${rowData.donate}`
            })
          },
          cellText: {
            content: (props) => {
              switch (props.column.key){
                case 'donate': return  <a href={props.value}>{props.value}</a>;
              }
            }
          }
      }}
      dispatch={dispatch}
    />
  );
};

export default GroupingCustomRowDemo;
