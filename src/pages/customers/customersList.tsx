import {
    List,
    Table,
    useTable,
    TagField,
    useModalForm,
    EditButton,
 
} from "@pankod/refine-antd";
import { EditCustomers } from "components/customers";
import { CreateCustomers, } from "components/customers/CreateCustomes";

import { ICustomers } from "interfaces";

export const CustomersList: React.FC = () => {
    const { tableProps } = useTable<ICustomers>();

    const { formProps, modalProps, show } = useModalForm({
        resource: "missions",
        action: "create",
    });

    const {
        modalProps: editModalProps,
        formProps: editFormProps,
        show: editShow
    } = useModalForm<ICustomers>({
        action: "edit",
        metaData: { populate: ["logo"] },
    });

    return (
        <>
            <List
                createButtonProps={{
                    onClick: () => {
                        show();
                    },
                }}
            >
                <Table {...tableProps}>
                    <Table.Column dataIndex="id" title="ID" />
                    <Table.Column dataIndex="missions" title="Service Title" />
                    <Table.Column
                        dataIndex="Mission_description"
                        title="Service Description"
                    />
                    <Table.Column dataIndex="Day" title="Day(s)" />
                    <Table.Column
                        dataIndex="Daily_rate"
                        title="Daily Rate"
                        render={(value) => (
                            <TagField value={value} color="red" />
                        )}
                    />
                    
                    <Table.Column<ICustomers>
                        title="Actions"
                        dataIndex="actions"
                        key="actions"
                        render={(_value, record) => (
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                                onClick={() => editShow(record.id)}
                            />
                        )}
                    />
                </Table>
            </List>
            <CreateCustomers modalProps={modalProps} formProps={formProps} />
            <EditCustomers
                modalProps={editModalProps}
                formProps={editFormProps}
            />
        </>
    );
};
