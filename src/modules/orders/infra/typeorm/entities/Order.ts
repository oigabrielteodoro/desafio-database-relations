import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Column,
} from 'typeorm';

import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';

/**
 * ObjectContaining {
 *  "customer": {
 *    "email": "oi@rocketseat.com.br",
 *    "id": "95575ba2-20f2-4ccf-81b8-45bc2ca2dd74",
 *    "name": "Rocketseat"
 *  },
 *  "order_products": [
 *     {
 *        "price": "500.00",
 *        "product_id": "3af25681-0838-4561-956d-3ec4ed39a9f4",
 *        "quantity": 5
 *      }
 *  ]}
 *
 * {
 *  "created_at": "2020-06-26T23:32:47.680Z",
 *  "customer": {
 *    "created_at": "2020-06-26T23:32:47.656Z",
 *    "email": "oi@rocketseat.com.br",
 *    "id": "95575ba2-20f2-4ccf-81b8-45bc2ca2dd74",
 *    "name": "Rocketseat",
 *    "updated_at": "2020-06-26T23:32:47.656Z"
 *  },
 *  "customer_id": "95575ba2-20f2-4ccf-81b8-45bc2ca2dd74",
 *  "id": "ae71158c-8b80-45e3-b663-b1bdc4df1a12",
 *  "updated_at": "2020-06-26T23:32:47.680Z"
 * }
 */

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  customer_id: string;

  @ManyToOne(() => Customer, { eager: true })
  @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
  customer: Customer;

  @OneToMany(() => OrdersProducts, ({ order }) => order, {
    cascade: ['insert'],
    eager: true,
  })
  order_products: OrdersProducts[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Order;
