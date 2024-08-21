import { PubSub, Subscription } from "@google-cloud/pubsub";
import { OnModuleDestroy } from "@nestjs/common";

export class PubSubService implements OnModuleDestroy {
  private pubSubClient: PubSub;
  private subscriptions: Subscription[] = [];

  constructor() {
    this.pubSubClient = new PubSub({ projectId: "qrypta-reborn" });
  }

  onModuleDestroy() {
    this.subscriptions.forEach((subscription) => subscription.close());
  }

  addSubscriptionHandler(name: string, handler: Function) {
    const subscription = this.pubSubClient.subscription(name);
    subscription.on("message", async (message) => {
      console.log(`Received message on ${name}: ${message.id}`);
      try {
        await handler(message);
        message.ack();
      } catch (error: any) {
        console.error(`Error processing message on ${name}: ${error.message}`);
        message.nack();
      }
    });
    this.subscriptions.push(subscription);
  }

  publishToTopic(topic: string, payload: any) {
    return this.pubSubClient.topic(topic).publishMessage({
      data: Buffer.from(JSON.stringify(payload)),
      attributes: {
        "Content-Type": "application/json",
      },
    });
  }
}

/**
 * Spremit u bazu
 * Publishat subset
 */
