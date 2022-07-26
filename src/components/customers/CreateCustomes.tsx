import {
    Modal,
    Form,
    Input,
    ModalProps,
    FormProps,
    
    DatePicker,
} from "@pankod/refine-antd";

type CreateCustomersProps = {
    modalProps: ModalProps;
    formProps: FormProps;
};

export const CreateCustomers: React.FC<CreateCustomersProps> = ({
    modalProps,
    formProps,
}) => {
    return (
        <Modal {...modalProps} title="Create  Customer Details">
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Customer name "
                    name="name" 
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label=" Phone Number" name="Phone_number">
                    <Input />
                </Form.Item>

                <Form.Item label=" Location" name="Location">
                    <Input />
                </Form.Item>
                <Form.Item label=" Created By" name="Created_by">
                    <Input />
                </Form.Item>
                <Form.Item label="Gender" name="Gender"> 
                    <Input />
                </Form.Item>

                <Form.Item label="Product" name="Product"> 
                    <Input />
                </Form.Item>

                <Form.Item label="Date of creation" name="Date_of_creation">
                    <DatePicker format={Date} />
                    </Form.Item>
                
            </Form>
        </Modal>
    );
};