import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

type TData = {
  propName: string;
  desc: string;
  type: string;
  default: string;
};

const data: TData[] = [
  {
    propName: "title",
    desc: "Sets title info on the document's metadata",
    type: "String",
    default: "undefined",
  },
  {
    propName: "author",
    desc: "Sets author info on the document's metadata",
    type: "String",
    default: "undefined",
  },
  {
    propName: "subject",
    desc: "Sets subject info on the document's metadata",
    type: "String",
    default: "undefined",
  },
  {
    propName: "keywords",
    desc: "	Sets keywords associated info on the document's metadata",
    type: "String",
    default: "undefined",
  },
  {
    propName: "creator",
    desc: "Sets creator info on the document's metadata",
    type: "String",
    default: '"react-pdf"',
  },
];

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    width: "100%",
  },
  headerSection: {
    backgroundColor: "rgb(252, 211, 204)",
    color: "rgb(141, 22, 2)",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "10px 15px",
    fontSize: "16px",
    textAlign: "left",
    fontWeight: "bold",
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgb(251, 251, 251)",
    color: "gray",
    padding: "8px 10px",
    fontSize: "14px",
  },
});

const MyDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerSection}>
          <Text>Prop name</Text>
          <Text>Description</Text>
          <Text>Type</Text>
          <Text>Default</Text>
        </View>
        {data.map((item, index) => (
          <View key={index} style={styles.data}>
            <Text>{item.propName}</Text>
            <Text>{item.desc}</Text>
            <Text>{item.type}</Text>
            <Text>{item.default}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default MyDocument;
